# Interop Components Example

This is a project for building a standalone Web Component using Stencil to use in examples.

## Getting Started

Run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```


Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


## Using this component

There are three strategies we recommend for using web components built with Stencil.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

If you want to host the file then you can host dist/wc-fin and import wc-fin.esm.js e.g. `<script type="module" src="../lib/wc-fin/wc-fin.esm.js"></script>` you can then use the webcomponent in your template or views e.g.:
`<fin-context-group-picker ></fin-context-group-picker>`

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

The settings available for the component can be seen here:

* [fin-context-group-picker](src/components/context-group-picker/readme.md)
