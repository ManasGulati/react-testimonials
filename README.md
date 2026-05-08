# TestimonialCarousel — React Interactive Review Slider

> A clean, interactive testimonial carousel built with React , demonstrating component decomposition, stateful navigation, and responsive UI design with Tailwind CSS.

---

## Table of Contents

- [Overview](#overview)
- [Tools and Technologies](#tools-and-technologies)
- [Project Structure](#project-structure)
- [Methods](#methods)
- [Key Insights](#key-insights)
- [Output](#output)
- [How to Run This Project](#how-to-run-this-project)
- [Result and Conclusion](#result-and-conclusion)
- [Future Work](#future-work)
- [Author and Contact](#author-and-contact)

---

## Overview

TestimonialCarousel is a React application that renders an interactive, navigable review slider across **5 reviewer profiles**. Users can cycle through testimonials using previous/next controls or jump to a random entry via a **"Surprise Me"** button , all driven by a single piece of `useState`.

The goal was to demonstrate the fundamentals of React done right: **clean component separation**, **controlled state**, **prop-driven rendering**, and a **polished UI** , without unnecessary complexity.

---

## Tools and Technologies

| Technology | Purpose |
|---|---|
| **React 19** | Functional components, `useState` for carousel index management |
| **Tailwind CSS** | Utility-first styling — responsive layout, violet accent palette, hover effects |
| **react-icons** | `MdArrowBackIosNew`, `MdNavigateNext`, `PiQuotesFill` , semantic icon set |
| **Create React App** | Build tooling, dev server, and test runner scaffold |

> **Design Decision:** All state lives in a single `useState` call inside `Testimonial`, the active reviewer index. No prop drilling beyond one level, no context overhead. Right-sized architecture for the problem.

---

## Project Structure

```
src/
├── components/
│   ├── Heading.js        # Page title with decorative violet underline
│   ├── Information.js    # Reviewer profile — avatar, name, role, quote
│   └── Testimonial.js    # Carousel shell — state, navigation, Surprise Me
├── public
├── data.js               # Static reviewer data — 5 entries with name, job, image, text
├── App.js                # Root layout — composes Heading + Testimonial
└── index.js              # React root entry point
```

**Architecture pattern:** `Testimonial` owns the `id` state and passes it to `Information` as a prop. `Information` performs a direct index lookup (`reviews[props.id - 1]`) to render the correct profile ,no filtering, no memoization overhead, just a clean array access.

---

## Methods

**Stateful Carousel Navigation**

`Testimonial` holds `id` in `useState(1)`. `prevHandler` and `nextHandler` implement circular navigation , wrapping from index 1 → `reviews.length` and back , ensuring the carousel never hits a dead end.

**Random Entry via "Surprise Me"**

`surpriseHandler` fires `Math.floor(Math.random() * reviews.length) + 1` directly into the state setter, producing a 1-indexed random pick in a single line.

**Prop-Driven Profile Rendering**

`Information` receives only `id` and resolves all display data from `data.js` internally. This keeps the parent lean and makes `Information` independently testable with any valid id.

**Offset Avatar Shadow Effect**

Each reviewer's avatar sits over a violet circle shifted by `top: -6px, left: 10px` with `z-index: -10` , a CSS layering trick that creates a stylized shadow without any image manipulation or external dependency.

**Responsive Layout**

The card uses `w-[85vw] md:w-[700px]` , fluid on mobile, fixed-width on desktop , paired with `hover:shadow-xl transition-all duration-700` for a subtle depth effect on interaction.

---

## Key Insights

- **Single source of truth:** One `useState` in `Testimonial` drives the entire UI , what's displayed, which buttons are active, what the "Surprise Me" pick returns. Minimal state, maximum control.
- **Circular navigation without libraries:** Wrapping prev/next at array boundaries with a simple conditional is idiomatic React , no carousel library, no dependency bloat.
- **Component responsibility is clear:** `Heading` renders copy, `Information` renders data, `Testimonial` owns behavior. Each component does one thing and is easy to replace or extend.
- **Tailwind over custom CSS:** Zero custom class names needed beyond the CRA defaults , Tailwind utilities compose into a production-quality UI without a single `.scss` file.

---

## Output

| View | Description |
|---|---|
| **Default Load** | Card renders reviewer #1 with avatar, name, job title, and review text |
| **Navigation** | Prev/Next arrows cycle through 5 reviewers with circular wrap-around |
| **Surprise Me** | Button picks a random reviewer index and re-renders the card instantly |
| **Hover Effect** | Card lifts with `shadow-xl` on hover — smooth 700ms transition |
| **Responsive** | 85vw on mobile, fixed 700px on md+ breakpoints |

---

## How to Run This Project

**Prerequisites:** Node.js (v14 or higher) and npm

**Step 1: Clone the repository**
```bash
git clone https://github.com/ManasGulati/testimonial-carousel.git
cd testimonial-carousel
```

**Step 2: Install dependencies**
```bash
npm install
```

**Step 3: Start the development server**
```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000). No API key or backend required — all data is local.

**Step 4: Build for production (optional)**
```bash
npm run build
```

---

## Result and Conclusion

TestimonialCarousel demonstrates that React fundamentals applied cleanly to produce a professional, interactive UI with very little code. The project keeps state minimal, components focused, and styling fast with Tailwind.

**Key achievements:**
- ✅ Circular prev/next navigation with zero edge-case bugs
- ✅ One-line random picker via `Math.random()` in the state setter
- ✅ Offset avatar shadow effect using pure CSS layering — no image libraries
- ✅ Fully responsive card layout using Tailwind breakpoint utilities
- ✅ Clean prop contracts — each component receives only what it renders

---

## Future Work

- [ ] Add **CSS or Framer Motion transitions** between reviewer cards for animated slide effect
- [ ] Connect to a **real testimonials API** or CMS to replace static data
- [ ] Add **star ratings** per reviewer rendered dynamically from data
- [ ] Implement **auto-play mode** with a configurable interval using `useEffect`
- [ ] Add **dot indicators** below the card to show position in the carousel
- [ ] Deploy to **Vercel** with CI/CD via GitHub Actions

---

## Author and Contact

**Developed by:** Manas Gulati

- **GitHub:** [github.com/ManasGulati](https://github.com/ManasGulati)
- **LinkedIn:** [linkedin.com/in/manasgulatiryu](https://linkedin.com/in/manasgulatiryu)
- **Email:** manasgulati222@gmail.com

---

> Built with React 19, Tailwind CSS, and react-icons.
