"""Static site server that also appends guest messages to messages.json."""
import json
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MESSAGES = ROOT / "messages.json"


class InvitationHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path.split("?", 1)[0].rstrip("/") != "/api/messages":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", "0") or 0)
        raw = self.rfile.read(length) if length else b""
        try:
            entry = json.loads(raw.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            self.send_error(400)
            return
        name = str(entry.get("name", "")).strip()[:80]
        message = str(entry.get("message", "")).strip()[:500]
        if not name or not message:
            self.send_error(400)
            return
        try:
            saved = json.loads(MESSAGES.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            saved = []
        if not isinstance(saved, list):
            saved = []
        saved.append({
            "name": name,
            "message": message,
            "createdAt": datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds"),
        })
        MESSAGES.write_text(json.dumps(saved, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        body = json.dumps(saved, ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    import os
    os.chdir(ROOT)
    ThreadingHTTPServer(("127.0.0.1", 8777), InvitationHandler).serve_forever()
