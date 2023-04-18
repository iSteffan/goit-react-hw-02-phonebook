import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

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
        <Filter filter={this.state.filter} handleInputChange={this.handleInputChange}></Filter>
        <ContactList contacts={this.filter()}></ContactList>
      </div>
    );
  }
}
