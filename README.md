# Gelato UI

React component library and design system powered by Vanilla Extract.

The focus is on extensibility through utility props, and customization through simple but robust themes. And this all backed by Vanilla Extract, which optimizes the CSS output using modern techniques (like CSS custom properties).

> This library is in development and not recommended for production use.

## Development

This project uses:

- Nx to manage the monorepo
- Storybook for visual development
- Jest for testing (+ React Testing Library for components)
- Cypress for E2E tests
- Webpack for bundling apps, libraries, etc

### Storybook

1. Run `yarn storybook:start` to spin up the Storybook development server.
2. Your browser should open with: http://localhost:4400/

### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library. These are stored in the `/libs/` folder. They can be imported using `@gelato-ui/mylib` from any other library or app (`/apps/`).

### Generating Components

Creates a `<Button>` component in `libs/components`.

```
nx g @nrwl/react:component button --project=components --export
```

Then you can generate any missing Storybook tests using:

```
nx g @nrwl/react:stories --project=components
```

### Creating utilities

Utilites are anything that isn't a component - like pure TS/JS. These are helper functions, data constants, etc.

1. Create new folder inside library - anywhere is ok: `libs/components/src/libs/your-utility/`
2. Add your files.
3. Make sure to export anything in the root `index.ts` that needs to be exposed to user via NPM module.

> We currently do not having tests auto generated for utilities, but they should be available through the Nx Jest setup.

### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
