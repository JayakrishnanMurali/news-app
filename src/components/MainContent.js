import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNews } from "../redux/news-slice";
import { News } from "./News";

const MainContent = () => {
  const dispatch = useDispatch();

  const newsApiCall = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=c589a52ef4bb4f3fb1d31a7e031f3f90"
    );
    dispatch(setNews(data.articles));
  };

  useEffect(() => {
    newsApiCall();
  }, []);

  const { allNews } = useSelector((state) => state.news);

  return (
    // h-[30rem]
    <div className="p-4 border-2 h-96  overflow-y-scroll">
      {allNews.map(
        ({ title, url, urlToImage, description, publishedAt }, i) => (
          <News
            key={i}
            title={title}
            url={url}
            image={urlToImage}
            desc={description}
            date={publishedAt}
          />
        )
      )}
    </div>
  );
};

export default MainContent;
