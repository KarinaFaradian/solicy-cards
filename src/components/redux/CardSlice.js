import { createSlice } from '@reduxjs/toolkit';

const CardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
  },
  reducers: {
    addCard(state, action) {
      state.cards.push({ id: Date.now(), count: action.payload });
    },
    deleteCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    filterCard(state) {
      state.cards = state.cards.map((a) => a).sort((x, y) => x.count - y.count);
    },
  },
});

export const { addCard, deleteCard, filterCard } = CardSlice.actions;

export default CardSlice.reducer;
