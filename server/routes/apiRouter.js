import StudentController from '../controllers/students/studentsController';

module.exports = (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.use((req, res, next) => {
    console.log('route');
    next()
  });

  apiRouter.param('id', (req, res, next, id) => {
    //validate user or check some data
    next();
  })

  apiRouter.get('/students', StudentController.get);
  apiRouter.post('/student', StudentController.post);
  apiRouter.delete('/student/:id', StudentController.delete);
};
