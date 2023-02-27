import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../redux/CardSlice';

import '../../styles/components/Main.scss';

const CardItem = ({ id, count }) => {
  const dispatch = useDispatch();

  return (
    <li className="card_item">
      {count}
      <button className="card_delete" onClick={() => dispatch(deleteCard({id}))}>
        &times;
      </button>
    </li>
  );
};

export default CardItem;
