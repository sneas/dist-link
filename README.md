# dist-link

A lightning fast alternative to `npm link` which excludes `node_modules`.

## Motivation

Developing React components with the help of `npm link` tool may produce an error:

```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
```

The reason is `react` and `react-dom` packages are included into `node_modules` of the source package.

This project solves the above problem by eliminating `node_modules` folder from the source package link.
