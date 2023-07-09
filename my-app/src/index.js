import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from 'react-dom/client';
import './index.css';

import Temps from './Temps';
import Searchbar from './Searchbar';
import Feel from './Feel';
import Details from './Details';
import Date from './Date';
import City from './City';
import Sixday from './Sixday';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    <Searchbar />
    <Date />
    <City />
    <Temps />
    <Feel />
    <Details />
    <hr></hr>
    <Sixday />
    </div>
    
    <div className='codeLink'>
    <span><a href='https://github.com/Melissa1825/react-weather-app' target='_blank' rel='noreferrer'>Open-source code</a>, by Melissa</span>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


