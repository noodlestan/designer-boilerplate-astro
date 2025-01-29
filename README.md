# Designer Decisions Astro Boilerplate

![](https://raw.githubusercontent.com/noodlestan/designer/refs/heads/main/docs/designer-decisions/public/designer-decisions-og-1280x640.png)

## Getting started

System requirements: [Node.js](https://nodejs.org/) (recommended: [NVM](https://github.com/nvm-sh/nvm)).

We recommended using [VS Code](https://code.visualstudio.com/) with the following extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx).

```
npm install
npm run dev
```

Preview opens typically at http://localhost:4321/

## Project Structure

Inside of your **Designer Decisions** + **Astro/Starlight** project, you'll see the following folders and files:

```
.
├── data/
│   ├── color/
│   └── space/
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Authoring decisions

Design decisions are loaded from the `data/` directory.

You can validate all data by running the `build:decisions` script. It reports all validation errors and broken references.

```
npm run build:decisions
```

### Authoring docs

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Add new decisions to your pages using `<Show>` components.

```mdx
<ShowDecision store={store} d={"Sizing Scale"} />
```

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Designer Decisions Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                 |
| :------------------------ | :------------------------------------- |
| `npm run build:decisions` | Validate design decisions in `./data/` |

### Learn more

-   [Designer Decisions Guides](https://designer-decisions.noodlestan.org/guides/welcome)
-   [Designer Decisions Component Reference](https://designer-decisions.noodlestan.org/components/Astro).

## Astro/Starlight Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

### Learn more

-   [Starlight documentation](https://starlight.astro.build/)
-   [Astro documentation](https://docs.astro.build)

## Noodlestan 🐘 Collective

We are an open collective of people dedicated to the design and software crafts: UX, design, code, web, 3d, audio, the works. Learn more about us and our projects at [Noodlestan.org](https://noodlestan.org).

**👐 Your contribution is welcome! 👐**

If would like to share your ideas, report a bug, ask for improvements - or simply say hi! 👋 - don't hesitate to join us on [Noodlestan's Discord](https://discord.gg/b8DkbJSF9z) or to drop us a line at `hello@noodlestan.org`.

## MIT License

Copyright (c) 2024 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).
