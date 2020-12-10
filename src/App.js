import logo from './logo.svg';
import React from 'react'
import './App.css';
import {
  Link
} from 'react-router-dom'

function App() {
  console.log('app!!')
  alert("App挂载了几次？") //TODO这里就是例子，开启了StrictMode,alert了两次，但是console了一次
  return (<
        div className="App" >
    <
        header className="App-header" >

      <
        img src={
          logo
        }
        className="App-logo"
        alt="logo" />

      <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p > <
        a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" >
            Learn React <
        /a> <
        h2 > < Link to='/BigNav' > 大导航 < /Link></h2 >

              <
        /header> <
        /div>

    );
}

export default App;