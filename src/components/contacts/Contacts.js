import React from 'react';
import update from 'react-addons-update';
import ContactCreator from './ContactCreator';
import ContactItem from './ContactItem';
import ContactRemover from './ContactRemover';
import ContactEditor from './ContactEditor';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactsData : [{name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}],
                selectedKey : -1,
                selectedContact : {
                    name : '',
                    phone : ''
                }
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

    onEdit(name, phone) {

        this.setState({
            contactsData: update(
                this.state.contactsData,
                {
                    [this.state.selectedKey] : {
                        name: { $set : name},
                        phone: { $set: phone}
                    }
                }
            ),
            selectedContact : {
                name : '',
                phone : ''
            }
        });

    }

    onSelect(key) {
        if (this.isSelected(key)) {
            console.log('key ==0?');
            this.setState({
                selectedKey: -1,
                selectedContact: {
                    name : '',
                    phone : ''
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selectedContact : this.state.contactsData[key]
        });
        console.log('onSelect : selected key is ' + key);
    }

    onRemove() {
        if (this.state.selectedKey === -1) {
            console.log('on Remove : selected contact is null');
            return;
        }
        let newContactsData = update(this.state.contactsData, {  
            $splice: [[this.state.selectedKey, 1]]
        });
        this.setState({
            contactsData : newContactsData,
            selectedKey : -1
        });
    }

    isSelectedKeyEmpty() {
        if (this.state.selectedKey === -1) {
            return true;
        } else {
            false;
        }
    }

    isSelected(key) {
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
                                        isSelected={this.isSelected.bind(this)(i)}
                                        name={contact.name}
                                        phone={contact.phone} 
                                        contactKey={i}
                                        key={i}
                            />);
                })}
                </ul>
                <ContactRemover onRemove={this.onRemove.bind(this)}/>
                <ContactEditor onEdit={this.onEdit.bind(this)}
                                isSelectedKeyEmpty={this.isSelectedKeyEmpty.bind(this)()}
                    contact={this.state.selectedContact}
                />
                <ContactCreator onInsert={this.onInsert.bind(this)}/>
            </div>
        );
    }
}

export default Contacts;