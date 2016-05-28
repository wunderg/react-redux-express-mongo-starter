module.exports = (app, express, staticPath) => {
  var appRouter = new express.Router();

  app.use('/', appRouter);

  appRouter.get('/about', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/login', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/signup', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/dashboard', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });
};
