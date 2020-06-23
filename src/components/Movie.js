import React from 'react' 
import PropTypes from 'prop-types'; 
import './Movie.css';

/**Movie Component는 state가 필요하지 않으므로 함수형 컴포넌트로 작성 */
function Movie({ title, year, summary, poster, genres }){
return (
    <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="move__data">
        <h3 className="movie__title">{title}</h3>
        <h3 className="movie__year">{year}</h3>
        <ul className="movie__genres">
            {genres.map((genres, index) => {
                return <li key={index} className="movie__genres">{genres}</li>;
            })}
        </ul>
        <p className="movie__summary">{summary.slice(0,100)}...</p>
        </div>
    </div>
)
}

Movie.propTypes = {
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}; 

export default Movie; 