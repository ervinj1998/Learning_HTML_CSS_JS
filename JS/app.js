const { sum } = require("./helpers");
const http = require("http");

const server = http.createServer((req, res) =>{
    res.end("Hola del server nodejs");
})

server.listen(3000);

const total = sum(10, 200);
console.log("Total es:", total);
