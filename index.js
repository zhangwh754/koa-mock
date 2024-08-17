import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import KoaRouter from 'koa-router'
import routes from './app/mock/index.js'
import * as middlewares from "./app/middlewares/index.js";

const app = new Koa()
const router = new KoaRouter()

app.use(bodyParser())
app.use(middlewares.responseHandle())
app.use(middlewares.errorHandle())

const getResponse = async (callback, ctx) => {
  return new Promise(async resolve => {
    const res = await callback(ctx)

    setTimeout(() => {
      resolve(res)
    }, 800)
  })
}

routes.forEach(route => {
  router[route.method](route.url, async ctx => {
    const { response } = route

    // ctx.request.body

    const res = await getResponse(response, ctx)

    ctx.body = res
  })
})

app.use(router.routes())
app.listen(15417)
