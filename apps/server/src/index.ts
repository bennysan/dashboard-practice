import http from 'http'

const server = http.createServer().listen(8080, () => {
  console.log('Server listening on port 8080')
})

server.on('connection', e =>
  console.log('new Connection from: ', e.remoteAddress),
)

server.on('request', (_, res) => {
  res.statusCode = 200
  res.write('Hello world !')
  res.end()
})
