import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';

import '../../styles/components/Main.scss';

const CardList = () => {
  const cards = useSelector((state) => state.cards.cards);

  return (
    <ul className="card_list">
      {cards.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </ul>
  );
};

export default CardList;
