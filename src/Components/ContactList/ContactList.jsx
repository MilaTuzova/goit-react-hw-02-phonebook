import React from 'react';
import { List, Btn, Text } from './ContactList.styled'


const ContactList = ({ contacts, onContactDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <List key={id}>
        <Text>{name}</Text>
        <Text>{number}</Text>
        <Btn onClick={() => onContactDelete(id)}>Delete</Btn>
      </List>
    ))}
  </ul>
);

export default ContactList;
