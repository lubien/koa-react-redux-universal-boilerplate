module.exports = () => function loggedInMiddleware (ctx, next) {
  ctx.state.user = (ctx.session.passport && ctx.session.passport.user)
    ? Object.assign(ctx.session.passport.user, { loggedIn: true })
    : { loggedIn: false };
  return next();
};
