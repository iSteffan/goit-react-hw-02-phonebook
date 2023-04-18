import { Component } from 'react';
import { Form, Label, Input, Btn } from './ContactForm.styled';
// import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = evt => {
        this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state)

        this.reset()
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name
                    <Input
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleInputChange}/>
                </Label>
                <Label>
                    Number
                    <Input
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleInputChange}/>
                </Label>


                <Btn type="submit">Add contact</Btn>
            </Form>
        );
    }
}

// Notification.propTypes = {
//     message: PropTypes.string.isRequired,
// };
