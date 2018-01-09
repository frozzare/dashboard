const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const fs = require('fs');
const path = require('path');
const glob = require('glob-fs')();
const request = require('request');
const auth = require('http-auth');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;
const htpasswd = path.join(__dirname, '..', '.htpasswd');

// Include widgets socket files.
io.on('connect', socket => {
  const widgets = glob.readdirSync('widgets/*');
  widgets.forEach(w => {
    const file = path.join(__dirname, '..', w, 'socket.js');
    if (fs.existsSync(file)) {
      require(file)(socket);
    }
  });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

// Handle next app.
nextApp.prepare().then(() => {
  // Proxy route for API's.
  app.get('/proxy', (req, res) => {
    req.pipe(request(req.query.url)).pipe(res);
  });

  // Add basic auth if htpasswd file exists.
  if (fs.existsSync(htpasswd)) {
    const basic = auth.basic({
	    realm: 'Dashboard',
	    file: htpasswd
    });
    app.get('*', auth.connect(basic), nextHandler);
  } else {
    app.get('*', nextHandler);
  }

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
