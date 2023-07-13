const http=require('http');

// const server= http.createServer((req,res)=>{
//     console.log(req)
// res.write('hey ayush');
// res.end();
// })
// server.listen(5000)

const server= http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('hey home page')
}
if(req.url==='/about'){
    res.end('hey about page')
}

res.end(`
<h1>opps</h1>
<p>Page not found</p>
<a href='/'>Back home</a>
`)
})
server.listen(5001)
 