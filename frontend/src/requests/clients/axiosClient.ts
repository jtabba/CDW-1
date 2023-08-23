import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
const API_URL: string = process.env.API_URL || "";

abstract class AxiosInstanceBase {
	protected readonly axiosInstance: AxiosInstance;

	protected constructor(baseUrl: string | undefined) {
		this.axiosInstance = axios.create({
			baseURL: baseUrl,
			headers: {
				"Content-Type": "application/json"
			}
		});
	}
}

abstract class InterceptorBase extends AxiosInstanceBase {
	public constructor(baseUrl: string) {
		super(baseUrl);

		this.interceptAndAddAuthHeader();
	}

	private handleRequestAuthorisation = (
		config: InternalAxiosRequestConfig
	) => {
		const token = localStorage.getItem("token");

		if (token) {
			// we may change this method
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	};

	private interceptAndAddAuthHeader = () => {
		this.axiosInstance.interceptors.request.use(
			this.handleRequestAuthorisation
		);
	};
}

export class AxiosClient extends InterceptorBase {
	private static axiosClient: AxiosClient;

	private constructor() {
		super(API_URL);
	}

	public static createInstance(): AxiosClient {
		if (!API_URL) {
			throw new Error("Cannot create instance - API_URL is not defined");
		}

		if (!AxiosClient.axiosClient) {
			AxiosClient.axiosClient = new AxiosClient();
		}

		return AxiosClient.axiosClient;
	}

	public async get<T>(endpoint: string, data?: T): Promise<T> {
		const response = await this.axiosInstance<T>({
			method: "GET",
			data: data ?? undefined,
			url: endpoint
		});

		if (response.status !== 200) {
			throw new Error(
				`GET request to ${endpoint} failed with status ${response.status}}`
			);
		}

		return response.data;
	}

	public async post<T>(endpoint: string, data: T): Promise<T> {
		const response = await this.axiosInstance<T>({
			method: "POST",
			data: data ?? undefined,
			url: endpoint
		});

		if (response.status !== 200) {
			throw new Error(
				`POST request to ${endpoint} failed with status ${response.status}}`
			);
		}

		return response.data;
	}
}
