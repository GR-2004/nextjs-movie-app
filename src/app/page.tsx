import { Suspense } from "react";
import Result from "@/components/Result";
import axios from "axios";
import loading from "./loading";
const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }: any) => {
  const genre = searchParams.genre || "most-popular-movies";

  // const axios = require('axios');

  const options = {
    method: "GET",
    url: `https://moviesverse1.p.rapidapi.com/${genre}`,
    params: {
      genre: "<REQUIRED>",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
    },
  };

  let results = null;

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    results = response.data;
  } catch (error) {
    console.error(error);
    // throw new Error('Failed to fetch data');
  }

  return (
    <Suspense fallback={loading()}>
      <Result result={results} />
    </Suspense>
  );
};

export default Home;
