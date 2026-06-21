# PRD: Fariz Rizky Rizaldy — Personal Portfolio Website

## Problem Statement

As a Front end Developer with 5+ years of experience across multiple technologies, industries, and roles (full-time developer, freelance technical lead, and mentor to 1000+ junior developers), Fariz needs a professional online presence that effectively communicates his skills, experience, and availability to two distinct audiences: recruiters/hiring managers looking for senior front-end talent, and potential freelance clients seeking a reliable developer or technical lead. Currently, his professional identity is fragmented across LinkedIn, GitHub, and a resume PDF — with no single, polished destination that tells his full story.

## Solution

Build a clean, minimal, single-scroll portfolio website with a separate blog section using Next.js 16, React 19, TypeScript, and Tailwind CSS v4. The site will deploy as a static export to GitHub Pages. The portfolio will prioritize clarity and scannability for recruiters while also showcasing freelance capability through dedicated sections. Content will be separated from presentation via a centralized data layer, making future updates trivial. Blog posts will be authored as MDX files in the repository, requiring no external CMS.

## User Stories

### Core Portfolio — Viewing Experience

1. As a recruiter, I want to see Fariz's name, current role, and a one-line summary within 3 seconds of landing on the page, so that I can quickly determine if he's a relevant candidate.
2. As a recruiter, I want a prominent "Let's Talk" CTA in the hero section, so that I can immediately reach out via email without scrolling.
3. As a recruiter, I want a "Download CV" button in the hero section, so that I can save his resume and share it with my hiring manager.
4. As a potential freelance client, I want to quickly understand what services Fariz offers, so that I can decide whether to reach out.
5. As a visitor, I want a sticky navigation bar that stays visible as I scroll, so that I can jump to any section at any time.
6. As a visitor, I want the navigation bar to be transparent over the hero and solid when scrolling content, so that it feels polished and non-intrusive.
7. As a mobile visitor, I want the site to be fully responsive, so that I can browse comfortably on any device.
8. As a visitor, I want smooth scroll-triggered animations as sections come into view, so that the page feels alive and professional.
9. As a visitor, I want hover effects on interactive elements (buttons, cards, links), so that the interface feels responsive and tactile.

### About & Summary

10. As a recruiter, I want to read a concise professional summary, so that I can understand Fariz's background and strengths without reading a full resume.
11. As a recruiter, I want to see key highlight numbers (years of experience, mentees count, etc.), so that I can quickly gauge his impact and seniority.

### Skills

12. As a recruiter, I want to see Fariz's tech stack organized by category (Frontend, Backend, Mobile, etc.), so that I can quickly check if he knows a specific technology.
13. As a technical interviewer, I want to see a broad but honest skill representation, so that I can plan relevant interview questions.

### Work Experience

14. As a recruiter, I want to see Fariz's work history in reverse chronological order, so that I can understand his career trajectory.
15. As a recruiter, I want to see measurable achievements for each role (e.g., "PageSpeed score improved from 41 to 85"), so that I can assess his impact.
16. As a hiring manager, I want to see the company names and dates clearly, so that I can assess tenure and progression.

### Freelance & Mentoring

17. As a potential freelance client, I want to see a dedicated freelance section highlighting project types and industries, so that I can assess relevant experience.
18. As a recruiter, I want to see that Fariz has mentored 1000+ junior developers and 100+ corporate staff, so that I can identify leadership and communication skills.
19. As a visitor, I want the freelance/mentoring section to feel distinct from the work experience section, so that I understand these are separate activities.

### Testimonials

20. As a recruiter, I want to read testimonials from mentees, so that I can assess Fariz's teaching ability and interpersonal skills.
21. As a potential freelance client, I want to read testimonials, so that I can trust Fariz's reliability and quality of work.
22. As a visitor, I want testimonials to appear near the mentoring section, so that they feel contextually relevant.

### Projects / Showcase

23. As a recruiter, I want to see 3–4 featured projects with descriptions and tech stacks, so that I can assess the quality and scope of Fariz's work.
24. As a technical interviewer, I want to see tech stack tags on each project, so that I can identify relevant projects to discuss.
25. As a visitor, I want to click through to live project URLs (when available), so that I can see the work firsthand.

### Education

26. As a recruiter, I want to see Fariz's educational background, so that I can verify qualifications.
27. As a visitor, I want to see informal education (Apple Developer Academy), so that I understand additional training and initiative.

### Contact

28. As a recruiter, I want a clear contact section with email, LinkedIn, and GitHub links, so that I can reach out through my preferred channel.
29. As a potential freelance client, I want an easy way to start a conversation, so that I can discuss my project needs.
30. As a visitor, I do NOT want to see a personal phone number on the public page, for privacy reasons.

### Blog

31. As a visitor, I want to access a blog from the main navigation, so that I can read Fariz's thoughts on software development.
32. As a visitor, I want a blog listing page showing all posts with titles, dates, and excerpts, so that I can browse available content.
33. As a visitor, I want to click into individual blog posts with full content rendering, so that I can read the complete article.
34. As Fariz, I want to write blog posts as MDX files in the repository, so that I can publish new content by committing and pushing.
35. As Fariz, I want to use Markdown features (headings, code blocks, lists, links) in blog posts, so that I can write rich content.
36. As a visitor, I want a way to navigate back to the main portfolio from blog pages, so that I don't get lost.

### SEO & Meta

37. As Fariz, I want proper meta tags and Open Graph data on every page, so that my portfolio looks professional when shared on LinkedIn, Slack, or messaging apps.
38. As Fariz, I want a descriptive page title and description for SEO, so that my name appears in search results.

### Deployment

39. As Fariz, I want the site to deploy to GitHub Pages as a static export, so that it's free and low-maintenance.
40. As Fariz, I want the site to work at the default GitHub Pages URL initially, so that I can deploy immediately without buying a domain.
41. As Fariz, I want the configuration to be easily switchable to a custom domain in the future, so that I can upgrade later without refactoring.

## Implementation Decisions

### Modules to Build

1. **Layout & Navigation Module**
   - Root layout component with global styles, fonts, and metadata
   - Sticky header component with transparent-to-solid scroll behavior
   - Desktop: horizontal nav links + CTA button
   - Mobile: hamburger menu with slide-out nav panel
   - Section anchor links with smooth scroll behavior

2. **Content Data Layer**
   - Centralized TypeScript data files containing all portfolio content
   - Separate data objects for: skills, experience, freelance/mentoring, testimonials, projects, education, contact info, hero content
   - Components import from this layer and render declaratively
   - Makes content updates a one-file change with zero component edits

3. **Hero Section**
   - Name, title ("Front end Developer"), professional tagline/one-liner
   - Two CTA buttons: "Let's Talk" (mailto link) and "Download CV" (placeholder link)
   - Animated entrance (fade-in on load)

4. **About / Summary Section**
   - Short paragraph summarizing background
   - Highlight stats displayed prominently (e.g., "5+ Years", "1000+ Mentees", "50+ Components Built")

5. **Skills Section**
   - Skills grouped into categories: Programming Languages, Frontend, Backend, Mobile, Tools & DevOps, Databases, AI, Soft Skills
   - Each skill rendered as a tag/badge
   - Category headings for scanability

6. **Experience Section**
   - Reverse chronological list of 4 work roles
   - Each role: company name, role title, date range, 3–5 bullet points with measurable achievements
   - Card or timeline visual layout

7. **Freelance & Mentoring Section**
   - Standalone section distinct from work experience
   - Mentoring stats (1000+ juniors, 100+ corporate staff)
   - Freelance project types and technologies used

8. **Testimonials Section**
   - 3 testimonial cards with dummy data initially
   - Each card: quote text, mentee/client name, role/context
   - Simple grid or stacked layout (no carousel — keeps it clean and accessible)

9. **Projects Section**
   - 4 project cards with dummy data initially
   - Each card: project name, description, tech stack tags, placeholder image, live URL placeholder
   - Card hover effect (subtle transform/shadow)

10. **Education Section**
    - 2 degrees (S1 and D3 from Binus) + Apple Developer Academy
    - Simple list layout with institution, degree, year

11. **Contact Section**
    - "Let's Talk" email CTA (mailto link)
    - "Download CV" secondary CTA (placeholder)
    - Icon links for LinkedIn and GitHub
    - No phone number displayed

12. **Blog Engine**
    - MDX files stored in a content directory
    - Build-time processing to generate static blog listing and detail pages
    - Blog listing page (`/blog`): posts with title, date, excerpt, read-more link
    - Blog detail page (`/blog/[slug]`): full MDX-rendered content
    - Navigation link back to main portfolio
    - Dummy posts (1–2) to validate the system

13. **Animation System**
    - Reusable `AnimatedSection` wrapper component using Framer Motion
    - Scroll-triggered fade-in/slide-up via `IntersectionObserver` (through Framer Motion's `whileInView`)
    - Hover interaction primitives for buttons and cards
    - Applied consistently across all sections

14. **Static Export Configuration**
    - `next.config.ts` configured with `output: 'export'`
    - `basePath` set to `/portofolio-fariz` for GitHub Pages compatibility
    - Standard `<img>` tags instead of Next.js `<Image>` component (not compatible with static export)
    - Favicon and meta tags configured

### Technical Architecture

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with inline theme configuration
- **Animations**: Framer Motion
- **Blog**: MDX with gray-matter for frontmatter parsing, next-mdx-remote or similar for rendering
- **Deployment**: GitHub Pages via static export
- **No external CMS**: All content is file-based
- **No phone number**: Excluded from public-facing pages for privacy

### Key Interfaces

- **Portfolio Data**: Typed interfaces for each content category (Skill, Experience, Project, Testimonial, Education, etc.)
- **AnimatedSection Props**: `children`, optional `delay`, optional `direction` for animation customization
- **Blog Post Frontmatter**: `title`, `date`, `excerpt`, `slug`, optional `tags`
- **Navigation Items**: Array of `{ label, href }` for section anchors and blog link

## Testing Decisions

### What Makes a Good Test

- Tests should verify **external behavior** — what the user sees and interacts with — not implementation details like which hooks are called or how state is managed internally.
- Component tests should render with realistic props and assert on visible output (text content, accessibility attributes, presence of links).
- Data layer tests should verify that data conforms to expected TypeScript interfaces and that content arrays are non-empty and correctly structured.

### Modules to Test

1. **Content Data Layer** — Verify all data arrays are non-empty, correctly typed, and contain required fields. This is the highest-value testing target since all presentation depends on it.
2. **Blog Engine** — Verify MDX files parse correctly, frontmatter is complete, slugs are generated properly, and listing/detail pages render without errors.
3. **Navigation** — Verify nav items are present, links point to correct anchors/routes, and mobile menu toggle works.

### Modules Not to Test (Not Worth It)

- Pure visual components (Hero, About, Skills, etc.) — these are declarative renders of data. If the data layer tests pass and the component renders without error, the visual output is a design concern, not a logic concern.
- Animation system — visual motion behavior, not business logic. Verify it doesn't crash, but don't assert animation states.
- Static export configuration — verified by successful `next build`.

### Prior Art

- No existing tests in the codebase (fresh project). Tests will be written using a testing framework to be determined (Vitest or Jest with React Testing Library).

## Out of Scope

- **Dark mode** — Light mode only for v1. No theme toggle.
- **Client logos** — Not included. Showcase projects serve as proof instead.
- **Phone number display** — Excluded for privacy. Available on downloadable CV only.
- **Custom domain** — Using default GitHub Pages URL. Custom domain can be added later by updating `basePath` configuration.
- **CMS integration** — All content is file-based. No headless CMS.
- **Contact form** — Email CTA only. No form submission backend.
- **Analytics** — Not included in v1.
- **Internationalization** — English only.
- **CMS / admin panel** — Content updates are made via code commits.
- **Real project data** — Projects and testimonials use dummy data initially.
- **Real CV PDF** — Download CV button links to a placeholder.

## Further Notes

### Content Source

All portfolio content (work experience, skills, projects, testimonials, education) is derived from Fariz's provided resume. The data layer should be designed to make future content updates a single-file operation.

### Placeholder Strategy

The following items use dummy/placeholder data to be replaced later:
- 4 project showcase cards
- 3 testimonial quotes
- 1–2 blog posts
- CV PDF download link
- Hero tagline/one-liner (to be refined)

### Future Considerations

- Custom domain setup (remove `basePath`, add domain DNS)
- Real project screenshots and links
- Real testimonials from mentees
- Additional blog posts
- Possible WhatsApp contact link for freelance leads in Indonesia/SEA
- Possible "Open to" status indicator (freelance/full-time availability)
