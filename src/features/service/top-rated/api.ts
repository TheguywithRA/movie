import { API } from "..";

const getTopRated = async (page : string) => {
	try {
		const response = await API.get(`movie/top_rated?language=en-US&page=${page}`);

		console.log(response);

		return response.data as ResponseTopRated;
	} catch (error) {
		console.log(error);
	}
};

export { getTopRated };