# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Workflow Preferences

- **Do NOT run `build`, `lint`, `eslint`, or `tsc` commands.** These are slow and block iteration. Instead, tell the user which commands to run to verify (e.g. "run `yarn build` to verify").
- Quick commands like `ls`, `git`, `grep`, `cat` etc. are fine to run directly.

## Status: LEGACY - Redirect Only

This site (bigsondev.com) is being retired. All traffic is redirected to bigdevsoon.me via Netlify `_redirects`. The only maintenance needed is keeping the redirects accurate.

## Tech Stack (Legacy)

- **Framework:** Gatsby v2 + React 16
- **Styling:** Styled Components + Ant Design
- **Content:** MDX (blog posts, pills, projects)
- **Code display:** CodeMirror via react-codemirror2 (material-palenight theme)
- **Hosting:** Netlify
- **Domain:** bigsondev.com

## Content Inventory

### Blog Posts (16) - `/blog/[slug]/`

```text
arrays-and-how-to-avoid-loops
autoformat-code-with-prettier
boolean-and-friends-tame-the-logic
collaboration-between-developers-and-designers-part-1
collaboration-between-developers-and-designers-part-2
collaboration-between-developers-and-designers-part-3
command-line-interface-and-a-terminal
fetch-data-in-react-as-user-types-or-clicks
fetch-data-in-react-with-graphql
how-to-fetch-data-in-react-using-pokeapi
how-to-improve-your-coding-skills
react-components-you-should-start-using-now
technical-interview-tips
tools-to-increase-your-conversion-rate-and-website-quality
var-let-const-best-practices-and-differences
ways-to-learn-effectively
```

### Pills (20) - `/pills/[slug]/`

```text
add-edit-delete-array-of-objects
box-sizing
conditions-with-includes
convert-objects-into-arrays
crispy-features
css-units
equal-height-cards
method-chaining
outline
place-elements-absolutely
react-arguments-in-event-handlers
react-use-counter-hook
react-use-dark-mode-hook
react-use-fetch-hook
react-use-toggles-hook
remove-duplicates
reset-normalize-css
reverse-string
string-includes
sum-reduce
```

### Projects (14) - `/projects/[slug]/`

All redirected to BDS equivalents (see `../big-dev-soon-landing-page/content-migration-map.md`).

## Key Files

- `static/_redirects` - Netlify 301 redirects (the only file that matters now)
- `src/mdx/blog/` - Blog post source MDX files (migration source)
- `src/mdx/pills/` - Pill source MDX files (migration source)
- `src/components/SyntaxHighlighter.js` - CodeMirror read-only code viewer
- `src/components/coding/CodeEditor.js` - Interactive code editor with tests
- `gatsby-config.js` - Site config, plugins, metadata

## MDX Component Patterns

Blog posts and pills use these components (imported from `~components`):

- `SyntaxHighlighter` - Code blocks (CodeMirror, material-palenight)
- `Post`, `KnowledgePill` - Content wrappers
- `Title`, `Paragraph`, `Text`, `Link` - Typography
- `PostList` - Bullet/numbered lists
- `PostFooter` - Share buttons + nav
- `Box`, `Space` (Ant Design) - Layout spacing
- `Alert` (Ant Design) - Info/warning boxes

Code examples are exported as JS template literals and passed to `SyntaxHighlighter`.

## Cross-Repo Context

- All content migrated to: `../big-dev-soon-landing-page/`
- Migration map: `../big-dev-soon-landing-page/content-migration-map.md`
