# DeciBuy

A purchase decision assistant (mobile app concept, MVP). Share a product from any store and get one clear verdict based on your own money situation and the price:

**Buy** · **Wait for payday** (with a date) · **Not now**, plus one line that says why.

Price facts, hours of work, installments and a savings goal are shown as reference facts only. No bank connection: the numbers stay on the phone.

> Portfolio project by **Kirill Blik**, solo product designer. I defined the concept, the visual language and every design decision. I used Claude (AI) as a production and critique partner: it built screens in Figma from my direction, drafted documentation, wrote this coded prototype and reviewed my work. I checked every output and corrected or rejected it where it didn't match my vision.

## Prototype

`index.html` is an interactive hi-fi prototype of all screens, built from the Figma hi-fi and design system. It is one self-contained file: open it in a browser, no build step.

- **31 hi-fi screens + 2 new states** (your name in onboarding, price unknown), in **Light and Dark**. Settings → Appearance: System / Light / Dark (default: System).
- **Folder stacks** are the core interaction. Tap a folder and it opens in place while the others slide down to the bottom edge. Tap or pull up the folders at the bottom to raise them as a stack and pick another. Swipe an open folder down to close it. Pull a stack up to spread it.
- **Real inputs.** Onboarding (income range or exact amount, pay rhythm and payday, rent, bills, savings goal, name), Add manually, editing from Home / My money / Settings.
- **Verdicts are computed** from your numbers with the verdict logic below. Folder colors update live when the numbers change.
- **Item actions.** Bought (with Undo), Save to My items, Wait again, Remove (with Undo). Re-check, sort, price graph (swipe an open folder left).
- **Motion.** Spring physics following Apple's "Designing Fluid Interfaces": every animation can be grabbed mid-flight, and a flick keeps its speed. Respects reduced motion.

The panel on the left jumps to any screen and simulates the phone's light / dark setting.

**On a phone** the page opens as the app itself: full screen, no device frame and no panel. Bottom elements (tab bar, buttons, folders at the bottom) stick to the bottom of any screen height, and long screens scroll.

**Install it as an app (PWA).** Live at https://jazzfoxtrot.github.io/DeciBuy/. iPhone: open it in Safari → Share → Add to Home Screen. Android: Chrome → ⋮ → Install app. It opens from its own icon, full screen, and still loads offline.

## What's in this repository

Only the live site, following the course rule that *the repository is the site, not the working folder*:

| File | What it is |
|---|---|
| `index.html` | The prototype (all screens, styles and scripts in one file) |
| `landing/` | The product landing page (one HTML file + real app screenshots in `landing/assets/`). Live: https://jazzfoxtrot.github.io/DeciBuy/landing/ |
| `case/` | The UX case study (one HTML file + images in `case/assets/`: real screens, low-fi frames from Figma, AI concept images). Live: https://jazzfoxtrot.github.io/DeciBuy/case/ |
| `manifest.webmanifest`, `sw.js` | What makes the site installable and work offline |
| `icon.svg` | App icon source (from the Figma App icon component); also the browser tab icon |
| `icon-512.png`, `icon-192.png`, `apple-touch-icon.png` (180) | App icon exported from `icon.svg`, square, no rounded corners (the phone rounds them) |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

Research (interviews, survey answers), working documents and drafts stay in the private project folder, because everything in a public repository is public.

## Verdict logic (MVP)

Judged on the full price, as a share of monthly **spare money** (take-home − rent − other bills):

| Level | Share of spare money | Verdict |
|---|---|---|
| Small | ≤ 5% | Buy |
| Comfortable | 5–25% (irregular income: 5–15%) | Buy |
| Stretch | 25–100% | Buy early in the pay cycle · **Wait for payday** after half of it has passed · irregular income: Buy under 50%, Not now from 50% |
| Over | > 100% | Not now |

- Hours of work = take-home ÷ 173.33 h per month.
- **No price → no verdict** (grey folder). A known price that couldn't be refreshed keeps its verdict with a "Couldn't check the price right now" note.
- Thresholds are design assumptions to validate in usability testing.
- Every verdict screen ends with: *DeciBuy helps you decide. The final call is always yours.*

## Design rules

- **Color = verdict:** green Buy, yellow Wait for payday, red Not now. Blue is the app and actions. Text on verdict colors is always black.
- **Folder metaphor:** item lists are folder stacks, and an item page is an opened folder.
- **Type:** Bricolage Grotesque (titles, numbers) and Manrope (everything else).
- **Spacing:** 8 inside lists, 12 heading → content, 20 between sections, 24 screen margin.

## Status

Done: research → personas → journey map → sitemap → flows → PRD → low-fi → design system (Light + Dark) → hi-fi → coded prototype.

Next: usability tests and metrics, UX writing pass, case study.

Demo data (Emma's numbers, sample products and their price histories) is placeholder content for the prototype, not research data.
