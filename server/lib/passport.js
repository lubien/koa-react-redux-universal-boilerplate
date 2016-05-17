const passport = require('koa-passport');
const { Strategy: GithubStategy } = require('passport-github');
const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL
} = require('../config');

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    name: user.displayName,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

passport.use(new GithubStategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

module.exports = passport;
