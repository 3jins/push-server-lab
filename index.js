import path from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import render from 'koa-ejs';
import serve from 'koa-static';

const app = new Koa();
const port = 3000;
const publicPath = path.join(__dirname, 'public');
const data = {
  'value1': 0,
};

// TODO(sejin): Refactor this to avoid the memory leak
const increaseDataPeriodically = () => {
  setTimeout(() => {
    if (data.hasOwnProperty('value1')) data.value1++;
    increaseDataPeriodically();
  }, 1000);
};

render(app, {
  root: publicPath,
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false,
});

const router = new Router();
router.get('/short-polling', async (ctx) => {
  await ctx.render('short-polling', {
    data
  });
});

app.use(serve(publicPath));

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
  increaseDataPeriodically();
});
