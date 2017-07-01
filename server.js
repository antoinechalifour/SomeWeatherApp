const { createServer } = require('http')
const httpProxy = require('http-proxy')

const port = process.env.PORT || 5000
const proxy = httpProxy.createProxyServer({})

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', '*')
  proxy.web(req, res, { target: 'http://api.openweathermap.org' })
})

server.listen(port, () => {
  console.log(`Weathr proxy listening on port ${port}`)
})
