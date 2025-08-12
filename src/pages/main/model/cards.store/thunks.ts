import { createAsyncThunk } from '@reduxjs/toolkit';
import { cardsSlice } from '@/pages/main/model/cards.store/slice';
import { TImgPosition } from '@/features/card';

export const getCards = createAsyncThunk(
  'cards-list/list',
  async (_, { dispatch }) => {
    try {
      dispatch(
        cardsSlice.actions.addCard({
          id: 1,
          title: 'test',
          imgPosition: 'onlyText',
        }),
      );
      // return response.data;
    } catch (err) {
      console.error('failed to get session', err);
    }
  },
);

export const setCardPosition = createAsyncThunk(
  'cards-list/list',
  async (
    { cardId, imgPosition }: { cardId: number; imgPosition: TImgPosition },
    { dispatch },
  ) => {
    try {
      dispatch(
        cardsSlice.actions.setCardPosition({
          cardId: cardId,
          imgPosition: imgPosition,
        }),
      );
      // return response.data;
    } catch (err) {
      console.error('failed to get session', err);
    }
  },
);

export const setCardEdit = createAsyncThunk(
  'cards-list/list',
  async ({ cardId, edit }: { cardId: number; edit: boolean }, { dispatch }) => {
    try {
      dispatch(
        cardsSlice.actions.setCardEdit({
          cardId: cardId,
          edit: edit,
        }),
      );
      // return response.data;
    } catch (err) {
      console.error('failed to get session', err);
    }
  },
);
