import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard, filterCard } from '../../redux/CardSlice';

import '../../../styles/components/Header.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const addNewCard = () => dispatch(addCard(Math.floor(Math.random() * 300)));

  return (
    <div>
      <header className="header">
        <button onClick={addNewCard} className="header_button header_button-add">
          Add card
        </button>
        <button onClick={() => dispatch(filterCard())} className="header_button header_button-sort">
          Sort cards
        </button>
      </header>
    </div>
  );
};
