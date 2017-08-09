import React from 'react';

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>Content</h2>
                <p> Hey! {this.props.name}</p>
                <p>{this.props.age}</p>
            </div>
        );
    }
}

export default Content;