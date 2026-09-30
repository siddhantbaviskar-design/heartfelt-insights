# Works Wheel Portfolio

## Goal
Replace the starter screen with the interactive portfolio wheel from the attached brief, using the supplied component behavior and locally managed artwork.

## What will change
- Add the reusable `WorksWheel` component under the existing UI component structure.
- Use the home page as a full-screen demonstration with nine named portfolio pieces.
- Replace remote placeholder artwork with a cohesive generated image set stored with the app.
- Apply a restrained editorial design system with responsive typography, accessible focus states, keyboard navigation, drag, and wheel interaction.
- Add app-specific page metadata and preserve reduced-motion support.

## Technical details
- Keep the existing React, TypeScript, Tailwind v4, TanStack Router, and `cn` utility setup.
- Retain the component’s requestAnimationFrame transform model while making empty-item and interaction behavior safe.
- Keep styling token-driven in `src/styles.css`; no backend or persistent storage is needed.
- Verify the page at desktop and mobile sizes, including initial ring display and interaction transitions.
