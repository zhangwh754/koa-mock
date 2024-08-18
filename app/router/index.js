import KoaRouter from 'koa-router'
import routes from '../mock/index.js'

const router = new KoaRouter()

const wait = async () => {
  return new Promise(async resolve => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}

export async function useRoutes(app) {
  try {
    routes.forEach(route => {
      router[route.method](route.url, async ctx => {
        const { response } = route

        await wait()

        const res = response(ctx)

        ctx.body = res
      })
    })

    app.use(router.routes())
    app.use(router.allowedMethods())
  } catch (error) {
    console.error('Error loading routes:', error)
  }
}
