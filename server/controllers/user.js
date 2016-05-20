export function loggedIn(ctx) {
  ctx.body = ctx.state.user;
}
