import { AuthPayLoad, AuthResponse } from './type';

import { API } from "..";

const PostLogin = async (payload: AuthPayLoad) => {
	try {
		const response = await API.post("https://dummyjson.com/auth/login", payload);

		console.log(response);
		
		return response.data as AuthResponse;
	} catch (error) {
		console.log(error);
	}
};

export { PostLogin };