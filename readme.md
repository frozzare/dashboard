# dashboard

Dashboard written for personal usage.

## socket

Every widget can have a [socket.io](https://socket.io/) connection. Just create `widgets/{name}/socket.js` that exports a function that have one argument that is the [socket.io](https://socket.io/) instance.

```js
module.exports = (socket) => {
};
```

## license

MIT © [Fredrik Forsmo](https://github.com/frozzare)
