# ByteSpace — Figma to React/Tailwind Recreation

A responsive React implementation of the supplied ByteSpace Figma assessment and screenshots.

## Included pages

- Home
- Courses / Search
- Course Details — About
- Course Details — Lessons
- Course Details — Reviews
- Creator Profile
- Login
- Register
- 404 page

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- React Hot Toast
- React Router

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Main routes

- `/`
- `/courses`
- `/course/build-digital-asset`
- `/course/build-digital-asset/lessons`
- `/course/build-digital-asset/reviews`
- `/creator/purepearl-studio`
- `/login`
- `/register`

Any unknown route shows the branded 404 page.

## Notes

The photographic/design assets included in `public/assets` were prepared from the screenshots you supplied so the visual result stays close to the source design. The UI is responsive and includes tasteful motion/hover interactions and toast feedback.
