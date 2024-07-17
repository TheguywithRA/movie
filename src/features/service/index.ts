import API from "./axiosWithConfig";
import { PostLogin } from "./auth/api";
import { getNowPlaying } from "./movie/api"
import { getPopular } from "./popular/api";
import { getTopRated } from "./top-rated/api"

export { API, getNowPlaying, getTopRated, getPopular, PostLogin};
