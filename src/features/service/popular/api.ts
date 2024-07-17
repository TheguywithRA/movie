import { API } from "..";
import { ResponsePopular } from './type';

const getPopular = async (page: string) => {
	try {
		const response = await API.get(`/movie/popular?language=en-US&page=${page}`);

		console.log(response);
		
		return response.data as ResponsePopular;
	} catch (error) {
		console.log(error);
	}
};

export { getPopular };