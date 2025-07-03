import express, { Express } from "express";
import http from 'http';
import apiRouters from "@/router/apiRouter";
import { SERVER_PORT } from "./serverConfig";
import cookieParser from 'cookie-parser';
import cors from "cors";

// debug
import { handleError, serverError } from "@/logics/error"

const app: Express = express();
const server: http.Server = http.createServer(app);

app.use(cors({
	origin: "*",
	credentials: true,
}));

// Apply Configurations
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '900mb' }));
app.use(express.text());
app.use(cookieParser());

// Initialize Routes
app.use("/api/", apiRouters);

server.listen(SERVER_PORT, async() => {
	console.log(`Peach Sorbet サーバー起動しました: ${SERVER_PORT}`);
})
