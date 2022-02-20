const notFoundMiddleware = (req, res) => {
  return res.status(404).send('路徑不存在')
}

export default notFoundMiddleware
