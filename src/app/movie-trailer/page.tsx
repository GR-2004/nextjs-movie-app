import React, { Suspense } from "react";
import axios from "axios";
import TrailerResult from "@/components/TrailerResult";

const Page = async () => {

  const options = {
    method: "GET",
    url: "https://moviesverse1.p.rapidapi.com/get-trending-trailers",
    headers: {
      "X-RapidAPI-Key": "ec6e035e27msh9a32217c489186ep11c893jsn1f762b7f0c91",
      "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
    },
  };
  let res = null;
  try {
    const response = await axios.request(options);
    res = response.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrailerResult result={res} />
    </Suspense>
  );
};

export default Page;
