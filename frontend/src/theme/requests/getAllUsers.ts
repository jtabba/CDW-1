import { isAxiosError } from "axios";
import { AxiosClient } from "./clients/axiosClient";
import { IErrorResponse, IResponse } from "./types";

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
      data: response.data,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      data: isAxiosError(err) ? err.message : (err as string),
    };
  }
};
