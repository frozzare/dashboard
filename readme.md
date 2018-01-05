# dashboard

Dashboard written for personal usage.

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

Then add it to `widgets/index.js` with a key that can be used in `config/dashboard.json`

## socket

Every widget can have a [socket.io](https://socket.io/) connection. Just create `widgets/{name}/socket.js` that exports a function that have one argument that is the socket instance.

```js
module.exports = (socket) => {
};
```

## license

MIT © [Fredrik Forsmo](https://github.com/frozzare)
