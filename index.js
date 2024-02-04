const jsonServer = require('json-server')

const docServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

const port = 3003

docServer.use(middleware)
docServer.use(router)

docServer.listen(port,()=>{
    console.log('Doc server listening on port'+port);
})
