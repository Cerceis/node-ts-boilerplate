import { CODES, CodeKey } from "@/stores/codes";
import { Response } from "express";

export type APIResponse<T> = {
	success: boolean,
	code: string,
	message: string,
	data: T,
}

// TODO: Handle Stream

/**
 * API Response処理を標準化する関数。
 * @param {T} [data] 返すData
 * @param {Response} [res] Express Response
 * @param {CodeKey} [codeKey="OK"] 一覧は@/stores/codes.ts
 * @param {string} [msg=""] codeKeyが指定されているのなら自動的に適切なメッセージが適応される
 * @param {number} [statusCode=200] HTTP Status code
 **/
export const handleResponse = <T>(data: T, res: Response, codeKey: CodeKey = "OK", msg: string = "", statusCode: number = 200) => {
	const status = CODES[codeKey];

	const response: APIResponse<T> = {
		success: true,
		code: status.code,
		message: msg || status.message,
		data,
	}

	return res.status(statusCode).json(response);
}

