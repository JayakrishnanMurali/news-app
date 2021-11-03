import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNews } from "../redux/news-slice";
import { News } from "./News";

const MainContent = () => {
  const dispatch = useDispatch();
  const NEWS_API = process.env.REACT_APP_NEWS_API;

  const newsApiCall = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`
    );
    dispatch(setNews(data.articles));
  };

  useEffect(() => {
    newsApiCall();
  }, []);

  const { allNews } = useSelector((state) => state.news);

  // Not implementing the infinite scroll feature - As I was unable to find
  // an api with Paginatiion for News.

  // Only 100 API calls are available in free version.
  // If you get a 403 Status. Limit of the API have reached and should wait
  // for 24 hours for resetting.

  return (
    <div className="p-4 border-2 height  overflow-y-scroll">
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
