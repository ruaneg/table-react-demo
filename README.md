# Table Demo: React + Typescript

## What is used?

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React-Router](https://reactrouter.com/)
- [TypeScript](https://typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

If there was more time, I would have:

- Add automated functional testing with Cypress or similar. (Unit Test is at 96%)
- Made the table more responsive.
- Add i18n support for text.
- Make a better Error Boundary with error graphic for specific error types.
- Add a Generic Table component for any data fed into it.
- Add Pagination/Virtual windowing to Table component to support large volumes of data.
- Add sorting/filtering/searching to Table.

## Getting Started

Install the dependencies:

```
cd table-react-demo
npm install
```

### Development

Run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

### Production

To try the production build, run:

```
yarn build
```

And then:

```
yarn preview
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `preview`: starts a simple server with the build production code
- `test`: runs vitest in watch mode
- `test:coverage`: runs vitest returning coverage table
- `test:ci`: runs vitest once in CI
- `test:update`: updates vitest snapshots
- `lint`: runs the linter in all components and pages
- `prettify`: runs prettier to format all components and pages
- `typecheck`: runs the type checker in all components and pages
- `generate`: runs plop to generate component files
