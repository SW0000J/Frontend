// /* esline-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['dropbox', 'Test Dropbox', 'HolyFront Dropbox']);
  let [countLike, changeCountLike] = useState(0);

  function ChangeTitle(){
    var newArray = [...title];
    newArray[0] = 'dropbox change';
    changeTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dropbox</div>
      </div>
      <button onClick={ ChangeTitle }>버튼</button>
      <div className="list">
        <h3>{ title[0] } <span onClick={ ()=>{ changeCountLike(countLike+1) } }>💖</span> { countLike } </h3>
        <p>n월 m일 게시</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>n월 m일 게시</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>n월 m일 게시</p>
        <hr/>
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>Title</h2>
      <p>Data</p>
      <p>Subject</p>
    </div>
  )
}

export default App;
