
# PAINTBOX

[![alt](https://raw.githubusercontent.com/allangomessl/paintbox/master/static/full-logo.png)](https://allangomessl.github.io/paintbox)

> :warning: **THIS PROJECT IS UNDER DEVELOPMENT**: we don't recommend its use in production yet!

> [![NPM version](https://img.shields.io/npm/v/paintbox.svg)](https://www.npmjs.com/package/paintbox)

<br /><br />

[DOCUMENTATION HERE](https://paintbox.vercel.app/)

<br /><br />

## Why?

- Write less do more, without miss flexiblity
- This Library has a proporse to be simple of use
- Who uses doesn't need write a custom css for simple custom or position

<br /><br />


## How to Install

```shell
# NPM
npm i paintbox

# YARN
yarn add paintbox

```

<br /><br />

## Configure

<br />

### Routing

If you use any Router like `react-router` you can do setup below to use Routing in your components

```tsx
import { Link } from 'paintbox';
import { Link as RouterLink } from 'react-router-dom';

Link.initialize(RouterLink);

// and after

<Link to="path" /> // render as Router Link
<Button to="path" /> // render as Router Link
<Button href="path" /> // render as normal anchor
  
```

[See more here](https://allangomessl.github.io/paintbox)
