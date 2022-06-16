import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import LoadingSpinner from "./LoadingSpinner";
import alanBtn from "@alan-ai/alan-sdk-web";
// import {  } from "module";

const NewsData = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  // const [selectOption, setSelectOption] = useState("");

  const alanKey = `01ca1577c19df0058e3120672661463b2e956eca572e1d8b807a3e2338fdd0dc/stage`;

  // console.log(category);

  const apiKey = "d98df2d0f4fb4756a18c80a448537d81";
  const apiEndpoint = "https://newsapi.org/v2/top-headlines?language=en";

  const getNews = async () => {
    setLoading(true);
    const response = await axios.get(
      `${apiEndpoint}&apiKey=${apiKey}&category=${category}`
    );
    // console.log(response);
    await setNews(response.data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, [category]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        setCategory(commandData.data);
      },
    });
  }, []);

  const categoryChangeHandler = (category) => {
    // console.log("inside changer : ", category);
    setCategory(category);
  };

  return (
    <div className="flex flex-col m-3 space-y-10 my-4 mx-9">
      <div className="justify-center text-center text-3xl font-extrabold text-indigo-900">
        Top Headlines
      </div>

      <div>
          {/* <Input
            onCategoryChange={categoryChangeHandler}
            currentCategory={category}
          /> */}
      </div>

      {loading && (
        <div className=" ">
          <LoadingSpinner />
        </div>
      )}
      {/* {loading && <LoadingSpinner} */}

      {!loading && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 px-8">
          {news.map((news) => (
            <div className="bg-indigo-200 border border-indigo-300 space-y-2 rounded-md p-2">
              <img
                src={news.urlToImage}
                className="rounded-sm w-full
            "
              />
              <p className="font-extrabold text-indigo-900 text-xl">
                {news.title}
              </p>
              <p className="text-sm">{news.content}</p>
              <p className="italic font-mono text-sm">- {news.author}</p>
              <p className="font-mono text-sm text-right">
                {moment(news.publishedAt).format("LL")}
              </p>
              <a href={news.url} target="_blank">
                Read More...
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsData;
