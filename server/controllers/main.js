import serverSideRender from '../lib/server-side-render';

exports.index = async function indexAction(ctx) {
  const { rendered, head } = await serverSideRender(ctx.request.originalUrl);

  await ctx.render('index', {
    head,
    rendered,
  });
};
