import React from 'react';

class ContactEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.contact.name,
            phone: props.contact.phone
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        });
    }
    handleClick() {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleChange(e) {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" name="name" value={this.state.name} 
                                onChange={this.handleChange.bind(this)}/>
                    <input type="text" name="phone" value={this.state.phone} 
                                onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}> Edit </button>
                </p>
            </div>
        );
    }
}

export default ContactEditor;