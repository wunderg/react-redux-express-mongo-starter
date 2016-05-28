import passport from 'passport';

import DataController from '../controllers/data/dataController.js';
import UserController from '../controllers/user/userController.js';

import '../services/passport.js';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.use((req, res, next) => {
    console.log('API CALL');
    next();
  });

  // apiRouter.param('id', (req, res, next, id) => {
  //   //validate user or check some data
  //   next();
  // });

  apiRouter.post('/login', requireSignin, UserController.signin);
  apiRouter.post('/signup', UserController.signup);
  apiRouter.post('/data', DataController.post);
  apiRouter.get('/tokenlogin', requireAuth, UserController.tokenLogin);
  apiRouter.get('/data', requireAuth, DataController.get);
  apiRouter.get('/instructors', requireAuth, UserController.getNames);
  apiRouter.put('/data', requireAuth, DataController.put);
  apiRouter.delete('/data/:id', DataController.delete);
};
