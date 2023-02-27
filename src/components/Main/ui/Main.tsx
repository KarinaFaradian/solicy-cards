import React, { useState } from 'react';

import '../../../styles/components/Main.scss';

type Card = {
  id: string,
  count: number
}

export const Main = () => {
  const [cards, setCards] = useState<Card[]>([]);

  let count = Math.floor(Math.random() * 300);

  const addCard = () => {
    setCards([...cards, { id: new Date().toString(), count }]);
  };

  return (
    <div className="wrapper">
      <header className="header">
        <button onClick={addCard} className="header_button-add">
          Add card
        </button>
        <button className="header_button-sort">Sort cards</button>
      </header>

      <main>
        <ul className="card_list">
          {cards.map((card) => (
            <li className="card_item" key={card.id}>
              {card.count}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
