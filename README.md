# Habiba & Ammar Wedding Invitation

A bilingual Arabic and English wedding invitation. The page itself is the source of the wedding details:

- Couple: حبيبة وعمار / Habiba & Ammar
- Date and time: Thursday, 26 November 2026, 8:00 PM–11:30 PM, Africa/Cairo
- Venue: قاعة مرجانه بلازا / Morgana Plaza, Shebin El-Qanater, Qalyubia
- Map: https://share.google/yAZd0FHOG4V9gLyc7

The folder name and the monogram files still use the older `amr-mona` filename. Those filenames were left unchanged so the existing logo files keep loading. They are not the names printed on the invitation.

The site is plain HTML, CSS, and JavaScript. It does not need Node.js or a build step, and the invitation itself works on GitHub Pages without a local server.

## Guest messages

The form posts to the existing Formspree endpoint in `script.js`:

```js
rsvpEndpoint: "https://formspree.io/f/xdaqabqg"
```

That endpoint is a public form address, not a private API key. Formspree stores the submissions in the connected Formspree account.

GitHub Pages cannot write new entries into `messages.json`. The public page can only read that file. A message typed on the published site is delivered through Formspree, and a copy is kept in that visitor’s browser so they can still see their own note.

`server.py` is only for local preview. It serves the site on `http://127.0.0.1:8777` and appends guest messages to `messages.json`. Do not describe the published site as saving messages into that file.

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
