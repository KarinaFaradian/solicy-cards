import CardItem from './CardItem';
import { useAppSelector } from '../redux/hooks';

import '../../styles/components/Main.scss';

const CardList = () => {
  const cards = useAppSelector((state) => state.cards.cards);

  return (
    <ul className="card_list">
      {cards.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </ul>
  );
};

export default CardList;
