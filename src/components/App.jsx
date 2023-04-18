import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };

  formSubmitHandler = data => {
    const id = nanoid();
    const dataArr = { ...data, id };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, dataArr],
    }));
  };

  handleInputChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  filter = () => {
    const { contacts, filter } = this.state;

    // новий масив, який містить всі контакти, що містять рядок пошуку
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    // повернення нового масиву, який містить тільки ті контакти, які відповідають рядку пошуку
    return filteredContacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <input
          value={this.state.filter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
        />
        <ul>
          {this.filter().map(contact => {
            return (
              <li key={contact.id}>
                <p>
                  {contact.name}: <span>{contact.number}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
