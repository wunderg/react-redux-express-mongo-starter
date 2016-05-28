import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/userModel.js';

const localOptions = { usernameField: 'email', passwordField: 'pass' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  console.log(email, 'EMAIL');
  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }

    user.comparePassword(password, (err2, isMatch) => {
      if (err2) {
        return done(err2);
      }
      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET || require('../../secrets.js').jwt
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  console.log(payload.sub, 'payloadSUB');
  User.findOne({ email: payload.sub }, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
