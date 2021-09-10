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

  findContactByName = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: uuidv4() };
    const { contacts } = this.state;

    const findContact = contacts.find(contact => contact.name === newContact.name);

    findContact
      ? alert(`${newContact.name} is already in contacts!`)
      : this.setState(prevStage => ({
          contacts: [...prevStage.contacts, newContact],
        }));
  };

  render() {
    const { contacts } = this.state;
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} onContactFind={this.findContactByName} />
        <ContactList contacts={contacts} onContactDelete={this.deleteContacts} />
      </Container>
    );
  }
}

export default App;
