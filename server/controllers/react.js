import serverSideRender from '../lib/server-side-render';
import frontEndScripts from '../lib/front-end-scripts';

exports.index = async function reactAction(ctx) {
  const { rendered, head, state } = await serverSideRender(
    ctx.request.originalUrl, ctx.state.user
  ).catch(err => ctx.throw(404, "Page doesn't exist")); // eslint-disable-line

  const scripts = frontEndScripts();

  await ctx.render('index', {
    head,
    rendered,
    state,
    scripts,
  });
};
