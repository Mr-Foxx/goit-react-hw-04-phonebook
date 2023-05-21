import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Countainer } from '../components/Countainer/Countainer';
import { TitleContact, TitlePhone } from '../components/Titles/Titles';
import { Contacts } from './Contacts/Contacts';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

const CONTACTS_KEY = 'contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem(CONTACTS_KEY)) ?? initialContacts
  );
  console.log(contacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values, { resetForm }) => {
    addNewCotact(values, resetForm);
  };

  const addNewCotact = (values, resetForm) => {
    const { name, number } = values;

    const checkContact = contacts.find(item => item.name === name);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (checkContact !== undefined) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
      resetForm();
    }
  };

  const handleFindContact = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  return (
    <Countainer>
      <TitlePhone>Phonebook</TitlePhone>

      <Form handleSubmit={handleSubmit} />

      <TitleContact>Contacts</TitleContact>

      <Filter
        title="Find contacts by name"
        handleFindContact={handleFindContact}
        filter={filter}
      />

      <Contacts contacts={filterContacts()} deleteContact={deleteContact} />
    </Countainer>
  );
}
