# Viator Blog – Context for Codex Agents

This markdown file is **only** for LLM-based agents that will help build and maintain the Viator philosophy blog. Humans can read it, but it is intentionally concise so an agent can load it as an initial prompt.

---

## 1. What We Are Building

* **Goal:** A fast, responsive philosophy blog (called **Viator**) powered by **WordPress** for content editing and **Next.js** + **Tailwind CSS** for the public site.
* **Audience:** Non-technical readers interested in philosophy of mind, AI, religion, etc.
* **Hosting:** Front-end on **Netlify**; WordPress on a cheap shared or VPS host.

---

## 2. Tech Stack Cheatsheet

| Layer | Choice | Notes |
| ----- | ------ | ----- |
| Front‑end | Next.js (JavaScript, not TypeScript) | Use SSG/ISR and API routes where convenient |
| Styling | Tailwind CSS + @tailwindcss/typography | Use the `prose` class for post bodies |
| CMS | WordPress | Start with the REST API, migrate to WPGraphQL later |
| Package manager | **pnpm** | Node ≥ 20 |
| Lint/Format | ESLint (airbnb-base) + Prettier | `npm run lint` must pass before commit |
| Tests | Jest + React Testing Library (optional) | Only for critical components |
| Analytics | Google Analytics v4 | Add `<Script>` in `_app.js` |

---

## 3. Approximate Folder Layout (front‑end)

```txt
/viator-frontend
 ├─ pages/
 │   ├─ index.js          # Home – list posts
 │   ├─ posts/[slug].js   # Dynamic post page
 │   ├─ about.js
 │   └─ contact.js
 ├─ components/
 │   ├─ Layout.js
 │   ├─ Navbar.js
 │   ├─ PostCard.js
 │   └─ CommentForm.js
 ├─ lib/
 │   ├─ api/
 │   │   ├─ rest.js       # fetch from WP REST
 │   │   └─ graphql.js    # optional later
 └─ styles/               # global.css, tailwind.css
```

Agents should match this structure unless instructed otherwise.

---

## 4. Incremental Roadmap

1. **Bootstrap** – repo, deps, Tailwind.
2. **WordPress setup** – local install, dummy posts, REST API.
3. **Layout & Navbar** – shared layout.
4. **Home page** – static build lists posts.
5. **Post page** – dynamic route renders HTML.
6. **Comments** – GET + POST via WP REST.
7. **Contact page** – simple form to WP plugin/Formspree.
8. **SEO tweaks** – `<Head>` tags and sitemap.
9. **Deploy** – Netlify, env vars.
10. **Polish** – lazy‑load images, 404 page, GA snippet.

Agents may pick any open step and complete it in a single PR.

---

## 5. Coding Rules for Agents

* Use **JavaScript** ES modules; no TypeScript.
* Components must be functional (`function Component(){}`).
* Prefer **fetch** / **async‑await**.
* Commit messages follow Conventional Commits (`feat:`, `fix:`, ...).

---

## 6. Definition of Done

* `npm run build` passes with no warnings.
* Lighthouse performance ≥ 90 on mobile for Home & Post pages.
* Responsive layout on mobile, tablet, desktop.

---
