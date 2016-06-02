export default function isLoggedIn(ctx, next) {
  if (ctx.state.user.loggedIn) return next();
  return ctx.throw(401, 'Unauthorized');
}
