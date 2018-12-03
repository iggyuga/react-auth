// const passport = require('passport');
// const User = require('../models/user');
// const config = require('../config');
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
import passport from 'passport';
import User from '../models/user';
import config from '../config';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';

// create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	// Verify this email and password, call done with the user
	// if it is the correct email and password
	// otherwise, call done with false
	User.findOne({ email: email}, function(err, user) {
		if (err) { return done(err); }
		if (!user) { return done(null, false); }
		
		// compare passwords
		user.comparePassword(password, function(err, isMatch) {
			if (err) { return done(err); }
			if (!isMatch) { return done(null, false); }
			return done(null, user);
		});
	});
});

// Setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
	// See if the user ID in the payload exists in our database
	// if it does, call 'done' with that other
	// otherwise, call without a user object

	User.findById(payload.sub, function(err, user) {
		if (err) { return done(err, false); }

		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	})

});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);