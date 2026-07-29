const http = require('node:http')
const porta = 9717

const server = http.createServer((req, res)=>{
    const novaURL = new URL ( req.url, `http://${req.headers.host}` )//http://localhost
    const caminhoURL = novaURL.pathname
    if(caminhoURL === '/'){
        res.statusCode = '201'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h3>HTML ROCKS!</h3>')
    }else{

    res.statusCode = '401'
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h3>401 não autorizado!</h3>')
    }
})

server.listen(porta, ()=>{
    console.log(`Servidor rodando na porta 
        http://local""host:${porta}`)
})