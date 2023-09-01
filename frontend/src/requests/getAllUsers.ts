import { isAxiosError } from "axios";
import { AxiosClient } from "./clients/axiosClient";
import { IErrorResponse, IResponse, userData } from "./types";

// Comments for insight
// 1. This is an example of a request that uses the AxiosClient to make a request to the backend
// 2. The AxiosClient is a singleton, so it is created once and then used throughout the application
// 3. Returning different status codes here with variable data will enable us to handle different responses in the frontend and apply different logic, notifications, colours, conditional rendering, etc
// 4. we can create similar get/post functions for all the different endpoints we need to hit and handle their data appropriately

export const getAllUsers = async (): Promise<IResponse | IErrorResponse> => {
	const axiosClient = AxiosClient.createInstance();

	try {
		const response = await axiosClient.get("/api/v1/getall");

		return {
			success: true,
			data: response.data 
		};
	} catch (err) {
		console.error(err);

		return {
			success: false,
			data: isAxiosError(err) ? err.message : (err as string)
		};
	}
};

export const getSingleUser = async(user_id:string ): Promise<IResponse | IErrorResponse> => {
	const axiosClient = AxiosClient.createInstance();
	try{
	
		const response = await axiosClient.get(`api/v1/getUser/${user_id}`)
		console.log("getSingleUser request:", response.config);
		return{
			success: true,
			data: response.data as userData
		}
		
	}catch (err) {
		console.error (err)
		return{
			success: false,
			data: isAxiosError(err) ? err.message : (err as string)
		}
	}
}

export  const setSingleUserData = async(userData: userData): Promise<IResponse | IErrorResponse> => {
	const axiosClient = AxiosClient.createInstance();
	
	try{
		const response = await axiosClient.post("api/v1/createUser", userData)
		return {
			success: true,
			data: response.data
		}
		
	}catch (err) {
		console.error(err)
			return {
				success: false,
				data: isAxiosError(err) ? err.message : (err as string)
			
		}
	}
}