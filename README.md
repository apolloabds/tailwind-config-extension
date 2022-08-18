# Apollo Tailwind configuration extension

The purpose of this example application is to demostrate how Apollo Tailwind configuration can be used, extended and overriden. [Learn more about Tailwind](https://tailwindcss.com/docs/installation).

## Run

- `yarn`
- `yarn start`

Try to modify `postcss.config.js` and then the `index.html` to add unique utility classes that are currently not there. Notice how the `dist/styles.css` file content changes.

## `package.json`

The following dev dependencies are required in order to extend Apollo Tailwind configuration.

- "postcss": "^8.3.5",
- "postcss-cli": "^9.0.0",
- "@abds/styles": "3.3.0",
- "tailwindcss": "^3.0.23"

The `scripts` contain useful commands for this application in order to replicate hot module replacement.

## `postcss-config.js`

We are importing Apollo's Tailwind configuration as `tailwindConfig`. We then create a custom config `tw` that extends `tailwindConfig` and then overrides the `brand-new` text color. With this change, Tailwind made the following classes available to the app: `text-brand-new-500` ranging from 50-900 as specified. This also allows us to use them with prefixes like active, hover and focus. `hover:text-brand-new-500`.

In this `tw` config we override the `content` property to purge files that end in `.html` and `.js` under the `src` folder. [Learn more about how to purge in Tailwind](https://tailwindcss.com/docs/configuration#content).

Run the following command to see inside Tailwind config:

> `console.log({ ...tailwindConfig });`

## `src/styles.css`

### Fonts

import that will give you access to AB Gilroy font family/style/weight.

### Reset

Apollo reset css is a combination of [New CSS Reset v1.4.0](https://github.com/elad2412/the-new-css-reset) and [Tailwindcss Preflight v2.2.16](https://github.com/tailwindlabs/tailwindcss/blob/master/src/css/preflight.css).

### Tailwind

[Preflight](https://tailwindcss.com/docs/preflight): An opinionated set of base styles for Tailwind projects.

`@tailwind base; @tailwind components; @tailwind utilities;` - Creates global css variables and other utility classes that are made available for the app.
