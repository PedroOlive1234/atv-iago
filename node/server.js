const http = require("http");

const PORT = 3000;

const requestHandler = (req, res) => {
    if (req.method === "GET" && req.url === "/index.html") {
        res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
        res.end(JSON.stringify({ message: "Conexão bem-sucedida ao servidor!" }));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain", "Access-Control-Allow-Origin": "*" });
        res.end("Rota não encontrada");
    }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});