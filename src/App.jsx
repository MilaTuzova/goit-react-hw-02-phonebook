import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'Components/ContactForm';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';
import { ContainerPhonebook, ContainerContacts } from 'App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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