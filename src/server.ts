import fastify from 'fastify'

const app = fastify()

app.post('/hi', () => {
  return 'hi'
})

app
  .listen({
    port: 7777
  })
  .then(() => {
    console.log('Fogo')
  })
