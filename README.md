# astro-p5-starter

![p5.js](https://img.shields.io/badge/p5%20js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![MIT](https://img.shields.io/badge/MIT-green?style=for-the-badge)

## Minimal Setup for p5.js Development

This is a starter kit for developing p5.js sketches with TypeScript. Built on Astro v5, it eliminates the initial environment setup, allowing you to focus immediately on creative coding. Sketches are portable to other creative coding platforms.

[![Use this template](https://img.shields.io/badge/use_this_template-197935?style=for-the-badge&logo=github&logoColor=white)](https://github.com/new?template_name=astro-p5-starter&template_owner=ryotahagihara)
[![View on GitHub](https://img.shields.io/badge/view_on_github-1f2328?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ryotahagihara/astro-p5-starter)

## Try Online

You can edit and preview the code instantly in your browser via the buttons below.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ryotahagihara/astro-p5-starter)
[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/ryotahagihara/astro-p5-starter)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ryotahagihara/astro-p5-starter)

## Features

Simply add p5.js sketch files (`.ts`) to `src/sketches/` and everything works automatically.

- **Auto Page Generation:** Listed on the home page, detail pages generated automatically
- **Preview + Code Display:** Canvas and source code displayed side by side
- **Hot Reload:** Browser auto-refreshes on file save
- **TypeScript Support:** Efficient development with type definitions and autocompletion
- **Highly Portable:** Instance mode enables easy porting to other platforms
- **Easy Deploy:** One-click publish, or keep it local

No need to create HTML files. Just focus on writing your sketch code.

## Getting Started

### 1. Use as Astro Template

Create a project directly from your terminal using the Astro CLI.

```bash
npm create astro@latest -- --template ryotahagihara/astro-p5-starter
```

### 2. Use as GitHub Template

Click the "Use this template" button on the GitHub repository page to create a new repository.

### 3. Deploy via Services

Click the "Deploy" buttons below to automatically create a repository and deploy.

## Creating Sketches

### Template

Sketches are written in the following format. This template is provided in `_template.ts`.

```typescript
import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(1080, 1080);
  };

  p.draw = () => {
    p.background(220);
  };
};

new p5(sketch, document.getElementById("sketch-container") as HTMLElement);
```

### Create New Sketch

**Create from template via command:**

```bash
npm run new-sketch <path> [template]
```

Creates a new sketch from the template file (`_template.ts`). Folders are created automatically if needed.

Examples:

```bash
npm run new-sketch my-sketch
# → Creates src/sketches/my-sketch.ts
# → Access at http://localhost:4321/sketches/my-sketch

npm run new-sketch favorites/circles
# → Creates src/sketches/favorites/circles.ts
# → Access at http://localhost:4321/sketches/favorites/circles
```

**Using custom templates:**

Specify any file as a template with the second argument. To keep templates hidden from the build, start the filename with `_`.

```bash
npm run new-sketch my-sketch _custom
# → Uses _custom.ts as template

npm run new-sketch my-sketch _templates/my-template
# → Uses _templates/my-template.ts as template
```

You can also use published sketches as a template:

```bash
npm run new-sketch my-sketch favorites/circles
# → Uses favorites/circles.ts as template
```

**Create file manually:**

You can also create `.ts` files directly in `src/sketches/`.

### Porting to Other Platforms

To port sketches, modify the following 3 lines. Also remove any custom type annotations you added.

1. `import p5 from 'p5';`
2. `: p5` (type annotation)
3. `, document.getElementById('sketch-container') as HTMLElement`

### Hiding Sketches

Files starting with `_`, and all files inside `_` prefixed folders, are excluded from the build.

```text
src/sketches/
├── my-sketch.ts        # Published
├── _template.ts        # Hidden
├── _old-sketch.ts      # Hidden
└── _drafts/            # Hidden folder
    ├── idea1.ts        # Hidden
    └── idea2.ts        # Hidden
```

To unpublish a sketch, add `_` prefix to the filename or move it to a `_` prefixed folder.

## Deployment

Automatically create a repository and deploy to hosting services via the buttons below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ryotahagihara/astro-p5-starter)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ryotahagihara/astro-p5-starter)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ryotahagihara/astro-p5-starter)

### Cloudflare Workers

Configured for Cloudflare Workers. Includes necessary configuration for deployment via Wrangler.

```bash
npm run build && npx wrangler deploy
```

**Note:** Requires Cloudflare authentication on first run.

> Cloudflare recommends using Cloudflare Workers for new projects. See [Deploy your Astro Site to Cloudflare | Docs](https://docs.astro.build/en/guides/deploy/cloudflare/) for details.

### Other Environments

Builds as a pure static site (SSG), compatible with Vercel, Netlify, GitHub Pages, or any standard server. See [Deploy your Astro Site | Docs](https://docs.astro.build/en/guides/deploy/) for details.

## CLI Commands

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Production Site

```bash
npm run build
```

### Preview Build Locally

```bash
npm run preview
```

### Create new sketch

```bash
npm run new-sketch <path> [template]
```

## Project Structure

```text
.
├── src/
│   ├── components/
│   │   ├── Header.astro         # Header component
│   │   ├── Footer.astro         # Footer component
│   │   └── SketchList.astro     # Sketch list component
│   ├── layouts/
│   │   └── Layout.astro         # Base layout
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   └── sketches/
│   │       └── [...slug].astro  # Sketch detail page
│   ├── sketches/                # Sketch files
│   │   ├── _template.ts         # Template
│   │   └── examples/            # Sample sketches
│   └── styles/
│       └── global.css           # Tailwind CSS settings
├── scripts/
│   └── new-sketch.js            # Sketch creation script
├── public/
│   └── favicon.svg              # Favicon
├── .prettierrc                  # Prettier config
├── eslint.config.js             # ESLint config
├── astro.config.mjs             # Astro config
├── wrangler.jsonc               # Cloudflare Workers config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies
```

## Tech Stack

| Tech               | Description                                     |
| ------------------ | ----------------------------------------------- |
| p5.js              | A JavaScript library for creative coding        |
| Astro v5           | The web framework for content-driven websites   |
| TypeScript         | JavaScript with syntax for types                |
| Tailwind CSS v4    | A utility-first CSS framework                   |
| Cloudflare Workers | Serverless platform running on a global network |
| Prettier           | An opinionated code formatter                   |
| ESLint             | A pluggable linting utility for JavaScript      |

## Resources

- [p5.js](https://p5js.org) - [Reference](https://p5js.org/reference/)
- [Astro](https://astro.build) - [Docs](https://docs.astro.build/en/getting-started/)
- [TypeScript](https://www.typescriptlang.org) - [Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com) - [Docs](https://tailwindcss.com/docs/installation/using-vite)
- [Cloudflare Workers](https://www.cloudflare.com/developer-platform/products/workers/) - [Docs](https://developers.cloudflare.com/workers/)
- [Prettier](https://prettier.io) - [Docs](https://prettier.io/docs/)
- [ESLint](https://eslint.org) - [Docs](https://eslint.org/docs/latest/)

## Contact

Please report issues or feature requests via [GitHub Issues](https://github.com/ryotahagihara/astro-p5-starter/issues).

## Credits

This template includes a "Built with [astro-p5-starter](https://github.com/ryotahagihara/astro-p5-starter)" link in the footer.
Keeping it is optional but greatly appreciated! It helps others discover this template and supports the project.

## License

MIT License - See [LICENSE](LICENSE) for details.

Copyright &copy; 2025 [Ryota Hagihara](https://www.ryotahagihara.com/) All rights reserved.
