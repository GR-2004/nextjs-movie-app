import Result from "@/components/Result"
import axios from "axios"
const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }: any) => {

  const genre = searchParams.genre || "fetchTrending";

  // const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://moviesverse1.p.rapidapi.com/${genre === "fetchTopRated" ? "top-250-movies" : "most-popular-movies"}`,
  params: {
    genre: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
  }
};

let results = null;

try {
	const response = await axios.request(options);
	// console.log(response.data);
  results = response.data
} catch (error) {
  console.error(error);
  // throw new Error('Failed to fetch data');
}


  return <div>
    <Result result={results} />
  </div>;
};

export default Home;
