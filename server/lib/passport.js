const passport = require('koa-passport');
const { Strategy: GithubStategy } = require('passport-github');
const config = require('../config');
const User = require('../models/User');

async function maybeAddUserToDatabase(serialized) {
  const foundUser = await User.findOne({ id: serialized.id });
  if (!foundUser) {
    const user = new User(serialized);
    await user.save();
  }
}

passport.serializeUser((user, done) => {
  const serialized = {
    id: user.id,
    name: user.displayName,
    username: user.username,
  };

  maybeAddUserToDatabase(serialized);

  return done(null, serialized);
});

passport.deserializeUser((user, done) => done(null, user));

passport.use(new GithubStategy({
  clientID: config.GITHUB_CLIENT_ID,
  clientSecret: config.GITHUB_CLIENT_SECRET,
  callbackURL: config.GITHUB_CALLBACK_URL,
}, (accessToken, refreshToken, profile, done) => done(null, profile)));

module.exports = passport;
