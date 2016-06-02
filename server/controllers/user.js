import User from '../models/User';

export function loggedIn(ctx) {
  ctx.body = ctx.state.user;
}

export async function all(ctx) {
  ctx.body = await User.find({}, {
    _id: 0, id: 1, name: 1, username: 1,
  }).sort({ name: 1 });
}

export function secret(ctx) {
  ctx.body = { message: 'I Must Not Tell Lies' };
}
