import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'Components/ContactForm';
import ContactList from 'Components/ContactList';
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

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContainerPhonebook>
          <h1>Phonebook</h1>
          <ContactForm />
        </ContainerPhonebook>

        <ContainerContacts>
          <h2>Contacts</h2>
          {/* <Filter/> */}
        <ContactList contacts={ contacts } />
        </ContainerContacts>
        
      </>
    );
  }
}

export default App;
