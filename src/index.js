import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './components/ContactsList';

const rootElement = document.getElementById('root');

let contactData= [{name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}];
                
ReactDOM.render(<ContactsList contactData={contactData}/>, rootElement);

