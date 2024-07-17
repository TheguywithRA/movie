import React, { useEffect, useState } from "react";

import TopRatedCard from "../../assets/component/top-ratedcard";
import { getTopRated } from "../service";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../service/hooks/useQuery";

const Toprated = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [loading, setLoading] = useState(false);
  const [topRatedData, setTopRatedData] = useState<ResponseTopRated>();
  useEffect(() => {
    fetchTopRated();
  }, [page]);

  const fetchTopRated = async () => {
    try {
      setLoading(true);

      const response = await getTopRated(page as string);

      setTopRatedData(response);
      setTimeout(() => {
        setTopRatedData(response);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const handleBackPage = () => {
    const numPage = Number(page);
    if (numPage > 1) {
      navigate(`?page=${numPage - 1}`);
    }
  };

  return (
    <div className="flex flex-col p-5 bg-gradient-to-b from-gray-800 to-gray-950">
      <div className="flex flex-col p-5">
        <label className="text-2xl font-semibold text-white mb-5">
          TOP RATED
        </label>
        {!loading ? (
          <div className="flex flex-row flex flex-wrap gap-5 justify-center">
            {topRatedData?.results.map((item: TopRated) => (
              <TopRatedCard
                poster_path={item.poster_path}
                title={item.title}
                release_date={item.release_date}
                overview={item.overview}
                popularity={item.popularity}
                size="w-40"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
            <div className="text-white">Loading.....</div>
          </div>
        )}

        <div className="flex flex-row justify-between mt-5">
          <button
            onClick={handleBackPage}
            className="bg-red-600 p-4 rounded-xl text-white"
          >
            Back
          </button>
          <button
            onClick={handlePage}
            className="bg-red-600 p-4 rounded-xl text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toprated;
