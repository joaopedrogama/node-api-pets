import "reflect-metadata"
import fastify from 'fastify'
import passport from 'passport';
import passportStrategy from './shared/passport/passport';
import { AppDataSource } from "./shared/typeorm/data-source";

import { IndexRoute } from "./shared/http/routes/index.routes"

passportStrategy(passport);
AppDataSource.initialize();

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
