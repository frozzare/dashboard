# dashboard

Dashboard written for personal usage. Built with Next.js, React, styled-components and socket.io.

## installation

1. Download or clone the repo.
2. Run `yarn`

## usage

```
→ npm run
available via `npm run-script`:
  build
  dev
  lint
  format
```

## custom widget

Create a new folder in `widgets` with a `index.js` file. 

```js
import Widget from '../../components/widget';

export default ({ text }) => (
  <Widget>
    <p>{text}</p>
  </Widget>
);
```

You can configure the width using `width` props with the same value as in [grid-styled](https://github.com/jxnblk/grid-styled).

## socket

Every widget can have a [socket.io](https://socket.io/) connection. Just create `widgets/{name}/socket.js` that exports a function that have one argument that is the socket instance.

```js
module.exports = (socket) => {
};
```

## license

MIT © [Fredrik Forsmo](https://github.com/frozzare)
