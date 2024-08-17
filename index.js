import Koa from "koa";
import KoaRouter from "koa-router";
import routes from "./mock/index.js";

const app = new Koa();
const router = new KoaRouter();

routes.forEach((route) => {
  router[route.method](route.url, async (ctx) => {
    const res = await route.response();

    ctx.body = res;
  });
});

app.use(router.routes());
app.listen(15417);
