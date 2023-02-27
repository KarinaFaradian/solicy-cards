import React, { useState } from 'react';
import Cross from '../../../assets/img/cross.svg';

import '../../../styles/components/Main.scss';

type Card = {
  id: number;
  count: number;
};

export const Main = () => {
  const [cards, setCards] = useState<Card[]>([]);

  let count = Math.floor(Math.random() * 300);

  const deleteCard = (cardId: number) => {
setCards(cards.filter(card => card.id !== cardId))
  }

  const addCard = () => {
    setCards([...cards, { id: Date.now(), count }]);
  };

  return (
    <div className="wrapper">
      <header className="header">
        <button onClick={addCard} className="header_button header_button-add">
          Add card
        </button>
        <button className="header_button header_button-sort">Sort cards</button>
      </header>

      <main>
        <ul className="card_list">
          {cards.map((card) => (
            <li className="card_item" key={card.id}>
              {card.count}
              <button className="card_delete" onClick={() => deleteCard(card.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
