import { DefineRouterFunc } from "../apiRouter";
import { Request, Response } from "express";
import { Logger } from "cerceis-lib";
import { handleError, serverError } from "@/logics/error";
import { handleResponse } from "@/logics/apiResponse";

// TODO: 1
// 1) TODO: 2の関数名を変更
// 2) TODO: 3のコメントを変更
// 3) このファイルのfilenameを変更
// 4) @/router/apiRouter.tsにimport してコールする

// TODO 2
export const templateApi: DefineRouterFunc = (router) => {

	router.get("/testError", async(_req: Request, res: Response): Promise<void> => {
		try{
			// TODO:
			const result: number = 1;

			// エラーのときはちゃんとthrowしてserverErrorを使ってください。
			// エラーコード一覧は@/stores/codes.tsに参照してください。
			if(result === 1){
				throw serverError("DEBUG", "Templateです");
			}

			if(result === 2){
				throw serverError("NOT_IMPLEMENTED");
			}

			handleResponse(true, res);
		}catch(err: any){

			// APIエラーのときはhandleErrorを使いましょう。
			handleError(err, res);
		}
	});

	router.get("/test", async(_req: Request, res: Response): Promise<void> => {
		try{
			handleResponse({ rows: ["apple", "banana"]}, res, "ACCEPTED");
		}catch(err: any){
			handleError(err, res);
		}
	});

	// TODO: 3 例) templateApi - OK
	Logger.succ("{{ここ}} - OK")
}
