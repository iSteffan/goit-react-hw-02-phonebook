import { List } from "./ContactList.styled";

export const ContactList = ({contacts}) => {
    return (
      <List>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <p>
                {contact.name}: <span>{contact.number}</span>
              </p>
            </li>
          );
        })}
      </List>
    );
  }

