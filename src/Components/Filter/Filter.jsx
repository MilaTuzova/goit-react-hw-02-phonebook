import React from 'react';

const Filter = ({ filter, onContactFind }) => (
    <form>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onContactFind} />
      </label>
    </form>
  );

export default Filter;
