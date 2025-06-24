interface Movie {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  original_language: string;
  // add other properties as needed
}

interface Props {
  movie: Movie;
}

const MovieCard = ({
  movie: {
    original_title,
    poster_path,
    vote_average,
    original_language,
    release_date,
  },
}: Props) => {
  return (
    <div className="movie-card text-white">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={original_title}
      />
      <div className="mt-4">
        <h3>{original_title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>.</span>
          <p className="lang">{original_language}</p>
          <span>.</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
