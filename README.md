# dist-link

[![version](https://img.shields.io/npm/v/@sneas/dist-link.svg?style=flat-square)](http://npm.im/@sneas/dist-link)

A lightning-fast alternative to `npm link` which excludes `node_modules`.

## Motivation

Developing React components with the help of `npm link` tool may produce an error:

```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
```

The reason is `react` and `react-dom` packages are included into `node_modules` of the source package.

This project solves the above problem by eliminating `node_modules` folder from the source package link.

## Installation

```sh
npm install -g @sneas/dist-link
```

## Usage

Run `dist-link` in the root folder of a package you'd like to be linked.

Run `dist-link package-name` in the root folder of a project which is going to use the link.
