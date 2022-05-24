import react from 'react' ;

const MovieCard = ({ movie1}) => {
  return (
    <div className="Movie">
      <div>
        <p>{movie1.Year}</p>
      </div>
      <div>
        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400x400'} alt={movie1.title}/>
      </div>
      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;