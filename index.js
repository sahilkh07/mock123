const jsonServer=require('json-server')
const server = jsonServer.create()

const router=jsonServer.router('db.json')
const cors= require('cors')
const middleware=jsonServer.defaults()
const port  = process.env.PORT||3001
server.use(cors())
server.use(router)
server.use(middleware)

server.listen(port,()=>{
    console.log("Running Successfully");
})