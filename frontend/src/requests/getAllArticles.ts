import { isAxiosError } from "axios";
import { AxiosClient } from "./clients/axiosClient";
import { IErrorResponse, IResponseArticle } from "./types";

// Comments for insight
// 1. This is an example of a request that uses the AxiosClient to make a request to the backend
// 2. The AxiosClient is a singleton, so it is created once and then used throughout the application
// 3. Returning different status codes here with variable data will enable us to handle different responses in the frontend and apply different logic, notifications, colours, conditional rendering, etc
// 4. we can create similar get/post functions for all the different endpoints we need to hit and handle their data appropriately
const backend_url: string ="http://localhost:8080/api/v1";

export const getAllArticles = async (): Promise<IResponseArticle | IErrorResponse> => {
	const axiosClient = AxiosClient.createInstance();

	try {
		const response = await axiosClient.get(`${backend_url}/getArticles`);

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
