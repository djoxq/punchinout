import express from "express";
import http from "http";
import router from "./routes.js";

const app = express();

app.use(express.json());
app.use(router);

const server = http.createServer(app);

server.listen(8080);

export { app };
