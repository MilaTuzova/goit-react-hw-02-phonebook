import React from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onContactFind }) => (
  <div>
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onContactFind} />
    </Label>
  </div>
);

export default Filter;
