import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [{name: 2}],
  }


  formSubmitHandler = data => {
    console.log("props", data)
    const id = nanoid();
    let dataArr = { ...data, id }
        console.log("array", dataArr)

    console.log(this.state)

this.setState(oldState => {
        const list = [...oldState.contacts]; // копія всіх елементів списку контактів зі старого стану

        // додавання нового об'єкту контакту до масиву list
        list.push({
          id: nanoid(), //генерація id
          name: data.name,
        });

        return { contacts: list };
      });

    // this.setState(prevState => ({
    // contacts: [...prevState.contacts, dataArr],
    //   }));
    //   this.setState(({ contacts }) => ({
    //   contacts: [dataArr, ...contacts],
    // }));
      console.log("state", this.state)
}


  render() {
    return (
      <ContactForm onSubmit={this.formSubmitHandler} />
    )
  }



};
        // <input
        //   type="tel"
        //   name="number"
        //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //   required/>