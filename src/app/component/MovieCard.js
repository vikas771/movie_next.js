import style from "../style/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ( item ) => {
  const {id, type, title, synopsis} = item.jawSummary;

  return (
    <>
      <div className={style.card}>
        <div className={style.card_image}>
          <img src={item.jawSummary.backgroundImage.url} alt="not found" width="260" height="200" />
        </div>
        <div className={style.card_data}>
          <h2>{title.substring(0,18)}</h2>
          <p>{synopsis.substring(0,66)}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
