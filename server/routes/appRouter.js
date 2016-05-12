export default (app, express, staticPath) => {
  var appRouter = new express.Router();

  app.use('/', appRouter);

  appRouter.get('/about', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });
};
