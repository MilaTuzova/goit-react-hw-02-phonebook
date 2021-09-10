import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'Components/ContactForm';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';
import { Container } from 'App.styled';
import contactsData from './data/data.json';

class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: uuidv4() };
    const { contacts } = this.state;

    const findContact = contacts.find(contact => contact.name === newContact.name);

    findContact
      ? alert(`${newContact.name} is already in contacts!`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
    console.log(this.state);
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  findContactByName = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  render() {
    const { filter } = this.state;

    const visibleContact = this.getVisibleContact();

    console.log(visibleContact);

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} onContactFind={this.findContactByName} />
        <ContactList contacts={visibleContact} onContactDelete={this.deleteContacts} />
      </Container>
    );
  }
}

export default App;
