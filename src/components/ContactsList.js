import React from 'react';

class ContactsList extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <ul>
                {this.props.contactData.map((contact, i) => {
                    return(<ContactItem name={contact.name}
                                        phone={contact.phone} 
                                        key={i}
                            />);
                })}
                </ul>
            </div>
        );
    }
}

class ContactItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.name} {this.props.phone}
            </li>
        )
    }
}

export default ContactsList;