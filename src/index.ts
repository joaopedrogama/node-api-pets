import "reflect-metadata"
import fastify from 'fastify'

import { IndexRoute } from "./shared/http/routes/index.routes"


const server = fastify()

// Register routes
server.register(IndexRoute, {prefix: '/api'})

// Start server
server.listen({ host: '0.0.0.0', port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`🚀 Server started at ${address}`)
})
