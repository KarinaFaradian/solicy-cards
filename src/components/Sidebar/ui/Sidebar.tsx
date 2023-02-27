import React from 'react';

import '../../../styles/components/Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>
        Press the "add card" button to add the new Card.
        <br />
        Use the "sort cards" button to sort the Cards by the increase.
        <br />
        Press an X icon on the top right to delete them.
      </p>
    </div>
  );
};
