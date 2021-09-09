import React from 'react';
import { Text, Input } from './Filter.styled';

const Filter = ({ filter, onContactFind }) => (
  <div>
    <Text>Find contacts by name </Text>
    <Input type="text" value={filter} onChange={onContactFind} />
  </div>
);

export default Filter;
