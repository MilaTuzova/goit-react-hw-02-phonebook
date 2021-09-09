import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'Components/ContactForm';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';
import { ContainerPhonebook, ContainerContacts } from 'App.styled';
import contactsData from './data/data.json';

class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };

  findContactByName = evt => {
    const query = evt.currentTarget.value;
    this.setState({ filter: query });
    console.log(query);
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    const { filter } = this.state;
    return (
      <>
        <ContainerPhonebook>
          <h1>Phonebook</h1>
          <ContactForm />
        </ContainerPhonebook>

        <ContainerContacts>
          <h2>Contacts</h2>

          <Filter filter={filter} onContactFind={this.findContactByName} />

          <ContactList contacts={contacts} onContactDelete={this.deleteContacts} />
        </ContainerContacts>
      </>
    );
  }
}

export default App;
