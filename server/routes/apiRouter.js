import dataController from '../controllers/data/dataController';

module.exports = (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.use((req, res, next) => {
    console.log('route');
    next();
  });

  apiRouter.param('id', (req, res, next, id) => {
    // validate user or check some data
    next();
  });

  apiRouter.get('/data', dataController.get);
  apiRouter.post('/data', dataController.post);
  apiRouter.delete('/data/:id', dataController.delete);
};
