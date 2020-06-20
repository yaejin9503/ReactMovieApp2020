import React from 'react';
import PropTypes from 'prop-types'; 

function Food({name, picture, rating}){
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src ={picture} alt={name} width="100px" height="100px"/>
    </div>
  ); 
}

const foodLike = [
  {
    id :1, 
    name : "김치", 
    image : "https://post-phinf.pstatic.net/MjAxNzA5MjJfMjEg/MDAxNTA2MDQ4NjA1MTEx.8bp7SLmfXIyMhEp29l0Mai_eXvCBG-kM5eWjGfOp2Wog.fA-Udk9-lGk7JSSKr3rUtkFH2zzLVKxI0f1ENt2_7KYg.JPEG/33_%EC%88%98%ED%8E%99%EC%8A%A4%EB%AA%85%ED%92%88%EA%B9%80%EC%B9%98_v2.jpg?type=w1200", 
    rating : 5, 
  }, 
  {
    id: 2, 
    name : "비빔밥", 
    image : "https://lh3.googleusercontent.com/proxy/DVVP07ojJwlsZRkC_X9VDAntBOkJpliLgokIyeI_QmFy66y7LsINB4F8hNoTtcignMKWy0_weFNPEVGp0KFthz8KTnJOUQKVrbvocmVEdWoYL2T5ZLuL-8FRIYI_aPI",
    rating : 4.9, 
  },
  {
    id :3, 
    name : "김밥", 
    image : "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    rating : 3,
  }
  
];

/**
 * const renderFood = dish => <Food name={dish.name} picture={dish.image}/>; 
 */


function App() {
  return (
    <div>
      {foodLike.map(dish => (<Food key={dish.id} name ={dish.name} picture ={dish.image} rating ={dish.rating}/>))}
      </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired, 
  image : PropTypes.string.isRequired, 
  rating : PropTypes.number, 
};

export default App;
