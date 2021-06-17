import React from 'react';
import Header from './Header';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Arrow from "./Arrow";

function App(){
  function getApp(){
    const route = window.location.pathname;
     if (route ==="/Arrow" )return <Arrow/>
    else if (route === "/class" )return <ClassComponent/>
    else  return <FunctionComponent/>;
  }
 return(
  <div>
    <Header/>
    {getApp()}
  </div>
)
}

 export default App;