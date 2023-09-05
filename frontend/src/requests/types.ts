export interface userData {
	_id: string;
	name: string;
}

export interface IResponse {
	success: boolean;
	data: userData[];
}

export interface IErrorResponse {
	success: boolean;
	data: string;
}

export interface articleData {
	_id: string;
	articleName: string;
	url: string;
}

export interface IResponseArticle {
	success: boolean;
	data: articleData[];
}
