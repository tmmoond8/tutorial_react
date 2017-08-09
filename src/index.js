import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

let data = {
    title: 'hihi',
    name: 'kkeke',
    age: 23
}
ReactDOM.render(<App data={data}/>, rootElement);