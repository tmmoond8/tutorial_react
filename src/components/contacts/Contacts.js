import React from 'react';
import update from 'react-addons-update';
import ContactCreator from './ContactCreator';
import ContactItem from './ContactItem';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactsData : [{name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}],
                selectedKey : -1
        };
    }

    onInsert(name, phone) {
        let newState = update(this.state, {
            contactsData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

    onSelect(key) {
        if (this.isSelectedKey(key)) {
            console.log('key ==0?');
            this.setState({
                selectedKey: -1
            });
            return;
        }

        this.setState({
            selectedKey: key
        });
        console.log('selected key is ' + key);

    }

    isSelectedKey(key) {
        if (key === this.state.selectedKey) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <ul>
                {this.state.contactsData.map((contact, i) => {
                    return(<ContactItem onSelect={this.onSelect.bind(this)}
                                        isSelectedKey={this.isSelectedKey.bind(this)(i)}
                                        name={contact.name}
                                        phone={contact.phone} 
                                        contactKey={i}
                                        key={i}
                            />);
                })}
                </ul>
                <ContactCreator onInsert={this.onInsert.bind(this)}/>
            </div>
        );
    }
}



export default Contacts;