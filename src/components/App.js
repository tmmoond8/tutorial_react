import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    heyYeYe_S2() {
        alert("hey ");
    }

    /*render(){
        let text = "I want talk to you";

        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };
        return (
            <div>
                <h1> {text}</h1>
                <h2> you so beautiful</h2>
                <button onClick={this.heyYeYe_S2}>Click Me</button>
                <p style = {pStyle}>{ 1 == 1 ? text : 'False'}</p>
            </div>
                
        );
    }*/
    render() {
        let data = this.props.data;

        return (
            <div>
                <Header title={data.title}/>
                <Content name={data.name} age={data.age}/>
            </div>
        );
    }
}

App.defaultProps = {
    data: {
        title: 'title',
        name: 'name',
        age: 30
    }
}

export default App;