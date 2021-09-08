import React from 'react';
import { List, Btn, Text } from './ContactList.styled'


const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <List key={id}>
        <Text>{name}</Text>
        <Text>{number}</Text>
        <Btn>Delete</Btn>
      </List>
    ))}
  </ul>
);

export default ContactList;
