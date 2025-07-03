export const CODES = {

	// コードがSxxxから始まるコードは公式エラーコードです。

	// 内部情報 - S1xx
	CONTINUE:                       { code: "S100", message: "継続", statusCode: 100 },
	SWITCHING_PROTOCOLS:            { code: "S101", message: "プロトコルの切り替え", statusCode: 101 },
	PROCESSING:                     { code: "S102", message: "処理中", statusCode: 102 },
	EARLY_HINTS:                    { code: "S103", message: "早期ヒント", statusCode: 103 },

	// 成功 - S2xx
	OK:                             { code: "S200", message: "成功", statusCode: 200 },
	CREATED:                        { code: "S201", message: "作成済み", statusCode: 201 },
	ACCEPTED:                       { code: "S202", message: "受理された", statusCode: 202 },
	NON_AUTHORITATIVE_INFO:         { code: "S203", message: "信頼できない情報", statusCode: 203 },
	NO_CONTENT:                     { code: "S204", message: "コンテンツなし", statusCode: 204 },
	RESET_CONTENT:                  { code: "S205", message: "コンテンツをリセット", statusCode: 205 },
	PARTIAL_CONTENT:                { code: "S206", message: "部分的なコンテンツ", statusCode: 206 },
	MULTI_STATUS:                   { code: "S207", message: "複数のステータス", statusCode: 207 },
	ALREADY_REPORTED:               { code: "S208", message: "すでに報告済み", statusCode: 208 },
	IM_USED:                        { code: "S226", message: "IM使用済み", statusCode: 226 },

	// リダイレクト - S3xx
	MULTIPLE_CHOICES:               { code: "S300", message: "複数の選択肢", statusCode: 300 },
	MOVED_PERMANENTLY:              { code: "S301", message: "恒久的に移動された", statusCode: 301 },
	FOUND:                          { code: "S302", message: "一時的に移動された", statusCode: 302 },
	SEE_OTHER:                      { code: "S303", message: "他を参照", statusCode: 303 },
	NOT_MODIFIED:                   { code: "S304", message: "未変更", statusCode: 304 },
	USE_PROXY:                      { code: "S305", message: "プロキシを使用", statusCode: 305 },
	TEMPORARY_REDIRECT:             { code: "S307", message: "一時的なリダイレクト", statusCode: 307 },
	PERMANENT_REDIRECT:             { code: "S308", message: "恒久的なリダイレクト", statusCode: 308 },

	// Client エラー - S4xx
	BAD_REQUEST:                    { code: "S400", message: "不正なリクエスト", statusCode: 400 },
	UNAUTHORIZED:                   { code: "S401", message: "認証が必要です", statusCode: 401 },
	PAYMENT_REQUIRED:               { code: "S402", message: "支払いが必要です", statusCode: 402 },
	FORBIDDEN:                      { code: "S403", message: "禁止されています", statusCode: 403 },
	NOT_FOUND:                      { code: "S404", message: "見つかりません", statusCode: 404 },
	METHOD_NOT_ALLOWED:             { code: "S405", message: "許可されていないメソッド", statusCode: 405 },
	NOT_ACCEPTABLE:                 { code: "S406", message: "受け入れ不可能", statusCode: 406 },
	PROXY_AUTH_REQUIRED:            { code: "S407", message: "プロキシ認証が必要です", statusCode: 407 },
	REQUEST_TIMEOUT:                { code: "S408", message: "リクエストタイムアウト", statusCode: 408 },
	CONFLICT:                       { code: "S409", message: "競合が発生しました", statusCode: 409 },
	GONE:                           { code: "S410", message: "すでに削除されています", statusCode: 410 },
	LENGTH_REQUIRED:                { code: "S411", message: "Content-Lengthが必要です", statusCode: 411 },
	PRECONDITION_FAILED:			{ code: "S412", message: "前提条件に失敗しました", statusCode: 412 },
	PAYLOAD_TOO_LARGE:              { code: "S413", message: "ペイロードが大きすぎます", statusCode: 413 },
	URI_TOO_LONG:                   { code: "S414", message: "URIが長すぎます", statusCode: 414 },
	UNSUPPORTED_MEDIA_TYPE:         { code: "S415", message: "サポートされていないメディアタイプ", statusCode: 415 },
	RANGE_NOT_SATISFIABLE:          { code: "S416", message: "範囲が満たされていません", statusCode: 416 },
	EXPECTATION_FAILED:				{ code: "S417", message: "Expectヘッダに失敗しました", statusCode: 417 },
	IM_A_TEAPOT:                    { code: "S418", message: "私はティーポットです", statusCode: 418 },
	UNPROCESSABLE_ENTITY:           { code: "S422", message: "処理できないエンティティ", statusCode: 422 },
	LOCKED:                         { code: "S423", message: "ロックされています", statusCode: 423 },
	FAILED_DEPENDENCY:              { code: "S424", message: "依存関係に失敗しました", statusCode: 424 },
	TOO_EARLY:                      { code: "S425", message: "時期尚早", statusCode: 425 },
	UPGRADE_REQUIRED:               { code: "S426", message: "アップグレードが必要です", statusCode: 426 },
	PRECONDITION_REQUIRED:          { code: "S428", message: "前提条件が必要です", statusCode: 428 },
	TOO_MANY_REQUESTS:              { code: "S429", message: "リクエストが多すぎます", statusCode: 429 },
	REQUEST_HEADER_FIELDS_TOO_LARGE:{ code: "S431", message: "リクエストヘッダーフィールドが大きすぎます", statusCode: 431 },
	UNAVAILABLE_FOR_LEGAL_REASONS:  { code: "S451", message: "法的理由により利用できません", statusCode: 451 },

	// Server エラー - S5xx
	INTERNAL_SERVER_ERROR:          { code: "S500", message: "サーバー内部エラー", statusCode: 500 },
	NOT_IMPLEMENTED:                { code: "S501", message: "未実装", statusCode: 501 },
	BAD_GATEWAY:                    { code: "S502", message: "不正なゲートウェイ", statusCode: 502 },
	SERVICE_UNAVAILABLE:            { code: "S503", message: "サービス利用不可", statusCode: 503 },
	GATEWAY_TIMEOUT:                { code: "S504", message: "ゲートウェイタイムアウト", statusCode: 504 },
	HTTP_VERSION_NOT_SUPPORTED:     { code: "S505", message: "HTTPバージョン非対応", statusCode: 505 },
	VARIANT_ALSO_NEGOTIATES:        { code: "S506", message: "変種も交渉します", statusCode: 506 },
	INSUFFICIENT_STORAGE:           { code: "S507", message: "ストレージ容量不足", statusCode: 507 },
	LOOP_DETECTED:                  { code: "S508", message: "ループが検出されました", statusCode: 508 },
	NOT_EXTENDED:                   { code: "S510", message: "拡張が必要です", statusCode: 510 },
	NETWORK_AUTH_REQUIRED:          { code: "S511", message: "ネットワーク認証が必要です", statusCode: 511 },

	// コードがExxxから始まるコードはカスタムエラーコードです。

	// 認証関連 - E1xxx
	INVALID_INPUT:                  { code: "E1001", message: "無効な入力が提供されました", statusCode: -1 },
	MISSING_REQUIRED_FIELD:         { code: "E1002", message: "必須項目が不足しています", statusCode: -1 },

	// AI関連 - E2xxx
	AGENT_TIMEOUT:                  { code: "E2001", message: "エージェントの応答がタイムアウトしました", statusCode: -1 },
	AGENT_INVALID_RESPONSE:         { code: "E2002", message: "エージェントから無効な応答を受け取りました", statusCode: -1 },
	AGENT_NOT_AVAILABLE:            { code: "E2003", message: "エージェントサービスが利用できません", statusCode: -1 },
	AGENT_MAX_RETRY:                { code: "E2004", message: "エージェントの最大再試行回数に達しました", statusCode: -1 },

	// DB関連 - E3xxx
	DB_CONNECTION_FAILED:           { code: "E3001", message: "データベースへの接続に失敗しました", statusCode: -1 },
	DB_WRITE_FAILED:                { code: "E3002", message: "データベースへの書き込みに失敗しました", statusCode: -1 },
	DB_READ_FAILED:                 { code: "E3003", message: "データベースからの読み込みに失敗しました", statusCode: -1 },
	FILE_NOT_FOUND:                 { code: "E3004", message: "ファイルが見つかりません", statusCode: -1 },
	FILE_WRITE_FAILED:              { code: "E3005", message: "ファイルの書き込みに失敗しました", statusCode: -1 },

	// ネットワーク関連 - E4xxx
	NETWORK_ERROR:                  { code: "E4001", message: "ネットワークエラーが発生しました", statusCode: -1 },
	API_CALL_FAILED:                { code: "E4002", message: "外部APIの呼び出しに失敗しました", statusCode: -1 },

	// 内部関連・その他 - E5xxx
	UNKNOWN_ERROR:                  { code: "E5000", message: "不明なエラーが発生しました", statusCode: -1 },
	DEBUG:                          { code: "E5001", message: "あらまーエラーだわ", statusCode: -1 },
} as const;

export type CodeKey = keyof typeof CODES;
