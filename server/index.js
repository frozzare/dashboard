const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const fs = require('fs');
const path = require('path');
const glob = require('glob-fs')();
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const port = process.env.PORT || 3000;

io.on('connect', socket => {
  const widgets = glob.readdirSync('widgets/*');
  widgets.forEach(w => {
    const file = path.join(__dirname, '..', w, 'socket.js');
    if (fs.existsSync(file)) {
      require(file)(socket);
    }
  });
});

nextApp.prepare().then(() => {
  app.get('*', nextHandler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
