import Link from "next/link";
import React from "react";
import MovieCard from "../component/MovieCard";
import Style from "../style/common.module.css";

const movie = async () => {
  
  await new Promise(resolve => setTimeout(resolve, 2000));


  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&linit_titles-50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
};



  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data.titles
  // console.log("data", data.titles);

  return (
    <>
      <section className={Style.movieSection}>
        <div className={Style.container}>
          <h1>Movies & Series</h1>
          <div className={Style.card_section}>
          {
            mainData.map((item) => {
            return <MovieCard key={item.id} {...item} />;
          })
          }
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
