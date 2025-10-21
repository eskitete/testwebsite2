# Oak & Iron Handyman — Vite + React + TypeScript Template

Local run commands

```powershell
npm install
npm run dev
```

Build & Preview

```powershell
npm run build
npm run preview
```

How to change brand/colors

- Update colors in `tailwind.config.ts` under `extend.colors`.
- Change fonts by editing `src/styles.css` import and `tailwind.config.ts` fonts.
- Edit service list in `src/routes/Services.tsx` or seed data elsewhere.

Deploy

- Vercel: connect repo and set build command `npm run build` and output `dist`.
- Netlify: same build command, set publish directory to `dist`.

License: MIT
