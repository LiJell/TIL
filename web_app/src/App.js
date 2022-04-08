import React, { Component } from "react";

function Movie({ num, fav }) {
  return (
    <div>
      <h1>영화{num}</h1>
      <h2>{fav}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Movie num="1" fav="타이타닉" />
      <Movie num="2" fav="아이언맨" />
      <Movie num="3" fav="지브리" />
      
    </div>
  );
}

export default App;
