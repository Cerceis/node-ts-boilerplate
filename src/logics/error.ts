import { Response } from "express";
import { Generate } from "cerceis-lib";
import { CODES, CodeKey } from "@/stores/codes";
import { z } from "zod";
import { DEBUG } from "serverConfig";

export const HandledErrorSchema = z.object({
	code: z.string(),
	message: z.string(),
	statusCode: z.number(),
})
export type HandledError = z.infer<typeof HandledErrorSchema>;

/**
 * エラー処理を標準化する関数。
 * @param {CodeKey} codeKey - 識別コード@/stores/errorCode.ts に参照してください。
 * @param {string} [errorMsg=""] - カスタムメッセージ
 * @param {number} [statusCode=500] - errorCodeKeyコードをちゃんとしていしたらここは自動的に適切なstatusCodeに変える。
 * @returns {HandledError}
 **/
export const serverError = (codeKey: CodeKey, errorMsg: string = "", statusCode: number = 500): HandledError => {
	const error = CODES[codeKey];
	let errorString = `
----------------------------------------\n
\x1b[31m[${Generate.currentDateTime()}] ❌ Error(${error.code}): ${error.message}\x1b[0m
	`
	if(errorMsg){
		errorString += `\n--- 詳細(${error.code}) START ---\n ${errorMsg} \n--- 詳細(${error.code})   END ---\n`
	}

	return {
		code: error.code,
		message: errorString,
		statusCode:
			error.statusCode > 0 ? error.statusCode :
				statusCode > 0 ? statusCode :
					500
	}

}

export const handleError = (err: HandledError, res: Response | null = null): Response | void => {
	// Unhandled Error
	if(!HandledErrorSchema.safeParse(err).success){
		console.log(err);
		console.log("\x1b[31m↑ このエラー、ちゃんとハンドリングしてね！\x1b");
		if(res)
			return res.status(500).json({ code: 500, message: "サーバー内部障害" });
		return;
	}

	if(DEBUG) console.log(err.message);
	if(res)
		return res.status(err.statusCode).json({ code: err.code, message: err.message });
	return;
};
