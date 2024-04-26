const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></input></form></body>')
        res.write('</head>')
    } else if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1]
            fs.writeFileSync('message.tst', message, (err) => {
                console.log(err)
            })
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
});

server.listen(4000);
