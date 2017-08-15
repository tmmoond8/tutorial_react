import React from 'react';

class ContactItem extends React.Component {

    handleClick() {
        this.props.onSelect(this.props.contactKey);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }

    render() {
        let style = {};
        let getStyle = function(isSelect) {
            if (isSelect) {
                style.background = '#00ff00';
            } else {
                style.background = 'transparent';
            }
            return style;
        };
        return (
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.props.phone}
            </li>
        );
    }
}

export default ContactItem;