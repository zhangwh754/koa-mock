export function errorHandle() {
  return async (ctx, next) => {
    try {
      await next();

      if (ctx.status === 404) {
        ctx.throw(404, "Not Found");
      }
    } catch (err) {
      // 设置状态码
      ctx.status = err.status || 500;
      // 设置响应体
      ctx.body = {
        code: ctx.status,
        msg: err.message || "服务器错误",
        data: null,
      };
    }
  };
}
