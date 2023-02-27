import React from 'react';
import { MyButton } from '../../MyButton';

import '../../../styles/components/Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header_button">
        <MyButton className="header_button-add">Add card</MyButton>
        <MyButton className="header_button-sort">Sort cards</MyButton>
      </div>
    </div>
  );
};
