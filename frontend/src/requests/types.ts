export interface userData {
	_id: string;
	name: string;
}
export interface UserData {
    name?: string;
    email?: string;
    dateOfBirth?: string;
    yearsOfExperience?: number;
    currentJobTitle?: string;
    AreasOfExpertise?: string[];
    rate?: number;
    interests?: string[];
    aboutMe?: string;
    id?: string;
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
