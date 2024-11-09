export function responseHandle(app) {
  return async (ctx, next) => {
    await next()

    if (ctx.status >= 200 && ctx.status < 400) {
      const response = ctx.body

      ctx.body = {
        code: 1,
        message: 'success',
        data: response,
      }
    }
  }
}
