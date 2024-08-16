import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operation';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const id = nanoid();
    const newContact = { id, name, number };

    dispatch(addContact(newContact));

    setName(''); // Clear the form fields
    setNumber('');
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <h1>Phonebook</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
          />
          <label htmlFor="number">Number</label>
          <input
            onChange={handleNumberChange}
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
          <button type="submit">Add a contact</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
