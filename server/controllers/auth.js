import passport from '../lib/passport';

exports.login = passport.authenticate('github');

exports.githubCallback = passport.authenticate('github', {
  successRedirect: '/',
  failureRedirect: '/',
});

exports.logout = function logoutAction(ctx) {
  ctx.logout();
  ctx.redirect('/');
};
