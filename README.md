#Movie App 2020 

props ==> 컴포넌트에서 컴포넌트로 전달하는 데이터를 말한다. 

함수의 매개변수와 비슷하게 생각하면 된다. 
매개변수를 이용하면 함수를 효율적으로 재사용할 수 있듯이 
컴포넌트의 props도 비슷하다. 
props를 사용하면 컴포넌트를 효율적으로 재사용 할 수 있다. 

state는 동적 데이터를 다룰 때 사용한다. 

동적데이터 ? 변경 될 가능성이 있는 데이터를 말한다. 객체를 예로 들면 겍체의 구성 요소 중 일 부가 있다가 없을 수도 있고, 구성 요소가 하나였다가 둘이 될 수도 있고, props는 그런 데이터를 다루지 못해서 state을 알아야 한다. 

클래스형 컴포넌트가 되려면 'App 클래스가 리액트가 제공하는 Component'클래스를 반드시 상속 받아야 한다! 

상속 ==> 클래스에 다른 클래스의 기능을 추가할 수 있게 해주는 것 

state는 객체 형태의 데이터이다. 그리고 state를 사용하려면 반드시 크래스형 컴포넌트 안에서, 소문자를 이용하여 state라고 적으면 된다. 

constructor(props){ //처음 실행됨
componentDidMount(){ //render 함수가 출력 된 후 
componentDidUpdate(){ //화면이 바뀔 때 
 componentWillUnmount(){ //컴포넌트가 죽을 때 

