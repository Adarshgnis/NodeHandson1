var http = require('http')
var app = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("<h1>Node Handson 1</h1>")
        res.end()
    } else if(req.url === '/About'){
        res.write("<h1>About page</h1>")
        res.end()
    }
})

app.listen(3001)