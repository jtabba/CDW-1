export interface userData {
	_id?: string;
	name?: string;
	email?: string;
	dateOfBirth?: string;
	currentJobTitle?: string;
	AreasOfExpertise?:string;
	rate?: number;
	interests?: string[]
	aboutMe?: string;
}

export interface IResponse {
	success: boolean;
	data: {};
}

export interface IErrorResponse {
	success: boolean;
	data: string;
}
