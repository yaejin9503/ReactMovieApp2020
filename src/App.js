import React from 'react';
import PropTypes from 'prop-types'; 
import axios from 'axios'; 

class App extends React.Component {

  state = { //isLoading 상태를 구분 지어 놓기 위해서 지정 
    isLoading : true,     
    movies : [], 
  }; 

  getMovie = async () =>{ //async 자바스크립트에게 getMovie()함수는 시간이 필요하고 ==> 비동기식이다.
    const { //구조 할당 분배 
      data : {
        data : {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    //await => axios.get()의 실행을 기다려 달라고 말해주는 것 
    this.setState({movies, isLoading : false}); //앞은 state 뒤는 구조할당으로 얻은 영화 데이터가 있는 변수 
    //this..setState({movies: movies}); 이 코드를 위의 코드로 축약 가능
  }
  componentDidMount(){ //render이 되고 난뒤 실행 되는 생명주기 함수
    this.getMovie(); 
  }

  render() {
    const {isLoading} = this.state; 
    return <div> {isLoading ? 'Loading...' : 'We are ready'}</div>; 
  }
}

export default App;
