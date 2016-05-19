import serverSideRender from '../lib/server-side-render';
import frontEndScripts from '../lib/front-end-scripts';

exports.index = async function reactAction(ctx) {
  const { rendered, head } = await serverSideRender(ctx.request.originalUrl);
  const scripts = frontEndScripts();

  await ctx.render('index', {
    head,
    rendered,
    scripts,
  });
};
