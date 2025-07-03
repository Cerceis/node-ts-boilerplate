import express, { type Router } from "express";
import { templateApi } from "./apiLogics/_template";
export type DefineRouterFunc = (router: Router) => void;

const router = express.Router();

// 作成したRouterはここでコール
templateApi(router);

export default router;
