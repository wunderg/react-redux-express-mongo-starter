module.exports = (app, express, staticPath) => {
  var appRouter = new express.Router();

  app.use('/', appRouter);

  appRouter.get('/about', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/add', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/student', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/guide', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });
};
