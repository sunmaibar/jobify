// import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || 500,
    msg: err.message || 'Something went wrong,try again later',
  }
  if (err.name === 'ValidationError') {
    defaultError.statusCode = 400
    // defaultError.msg = err.message
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = 400
    defaultError.msg = `${Object.keys(err.keyValue)}已經有人使用了，請再換一個`
  }
  // res.status(defaultError.statusCode).json({ msg: err })
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

export default errorHandlerMiddleware
