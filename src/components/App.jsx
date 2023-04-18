import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
  }


  formSubmitHandler = data => {
    const id = nanoid();
    const dataArr = { ...data, id }

    this.setState(prevState => ({
    contacts: [...prevState.contacts, dataArr],
      }));
}


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => {
            return (
              <li key={contact.id}>
                <p>{contact.name}: <span>{contact.number}</span></p>
            </li>)
          })}
        </ul>
      </div>
    )
  }



};
