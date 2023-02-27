import { deleteCard } from '../redux/CardSlice';
import { useAppDispatch } from '../redux/hooks';

import '../../styles/components/Main.scss';

const CardItem = ({ id, count }: {id: number, count: number}) => {
  const dispatch = useAppDispatch();

  return (
    <li className="card_item">
      {count}
      <button className="card_delete" onClick={() => dispatch(deleteCard({ id }))}>
        &times;
      </button>
    </li>
  );
};

export default CardItem;
