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
