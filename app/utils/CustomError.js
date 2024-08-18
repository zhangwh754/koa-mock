export class CustomError extends Error {
  constructor(message, code) {
    super(message)

    this.code = code

    // 设置错误堆栈跟踪
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }
  }
}
