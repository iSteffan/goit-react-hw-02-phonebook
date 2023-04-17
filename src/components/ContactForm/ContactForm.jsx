import { Component } from 'react';
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleInputChange}
                    />
                </label>

                <button type="submit">Add contact</button>
            </form>
        );
    }
}

// Notification.propTypes = {
//     message: PropTypes.string.isRequired,
// };
