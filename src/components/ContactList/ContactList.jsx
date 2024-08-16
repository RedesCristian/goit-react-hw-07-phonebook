import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operation';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Contact List</h1>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => dispatch(deleteContact(contact.id))} // Utilizează deleteContact
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
