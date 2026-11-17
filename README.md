# Ammar & Habiba Engagement Invitation

A bilingual Arabic and English engagement invitation. The page itself is the source of the engagement details:

- Couple: عمار وحبيبة / Ammar & Habiba
- Date and time: Thursday, 26 November 2026, 7:00 PM–11:30 PM, Africa/Cairo
- Venue: قاعة مرجانه بلازا / Morgana Plaza, Shebin El-Qanater, Qalyubia
- Map: https://share.google/yAZd0FHOG4V9gLyc7

The folder name and the monogram files still use the older `amr-mona` filename. Those filenames were left unchanged so the existing logo files keep loading. They are not the names printed on the invitation.

The site is plain HTML, CSS, and JavaScript. It does not need Node.js or a build step, and the invitation itself works on GitHub Pages without a local server.

## Guest messages

GitHub Pages is static, so shared congratulation messages use a free Google Apps Script web app as the guestbook API.

1. Open [script.google.com](https://script.google.com) → New project.
2. Paste `guestbook-apps-script.js`, then Save.
3. Deploy → New deployment → Web app → Execute as **Me** → Who has access **Anyone**.
4. Copy the Web App URL into `script.js`:

```js
guestbookUrl: "https://script.google.com/macros/s/XXXX/exec"
```

After that, every visitor sees every message. Formspree (`rsvpEndpoint`) still emails the couple when someone submits.

`server.py` is only for local preview on `http://127.0.0.1:8777` and can append to `messages.json` locally.

## Preview locally

Open `index.html`, or run:

```bash
python server.py
```

Then open `http://127.0.0.1:8777`.

## Publish with GitHub Pages

Repository: `https://github.com/youssef-ehab-nafaa/Ammar-Habiba`

Pages address, already set in `invitation.websiteUrl`:

```text
https://youssef-ehab-nafaa.github.io/Ammar-Habiba/
```

1. Push the `main` branch to that repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save, then enable **Enforce HTTPS** when GitHub offers it.

Asset paths are relative, so CSS, JavaScript, images, and audio load under the `/Ammar-Habiba/` subpath.

## Privacy

The published site is public. Publish only photographs and music you have permission to share.
