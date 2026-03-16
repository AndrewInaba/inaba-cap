# INABA'S CAP Concussion Awareness Website

This is a Vite + React single-page website prepared for deployment on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Add your Google Form

Open `src/App.jsx` and replace this line with your real form link:

```js
const googleFormUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/viewform';
```

The homepage button and QR code both update automatically from that value.

## Deploy to Vercel

1. Upload this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

The site includes the two pamphlet images in `public/images/`.
