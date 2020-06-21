import React from 'react' 
import PropTypes from 'prop-types'; 


/**Movie Component는 state가 필요하지 않으므로 함수형 컴포넌트로 작성 */
function Movie(){
    return <h1></h1>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}; 

export default Movie; 