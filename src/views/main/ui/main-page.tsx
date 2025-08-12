'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { CardEdit, CardBody, TImgPosition } from '@/features/card';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { cardsStore } from '@/features/card/model/cards.store';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector(cardsStore.selectors.cardsBaseSelector);

  const [counter, setCounter] = useState<number | string>('');

  const handleInputCounter = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      Number(event.target.value) &&
      event.target.value.length > 0 &&
      event.target.value[0] != '+'
    ) {
      setCounter(Number(event.target.value));
    } else {
      setCounter(event.target.value);
    }
  };

  const handleEditOpen = (cardId: number, open: boolean) => {
    dispatch(
      cardsStore.thunks.setCardEdit({
        cardId: cardId,
        edit: open,
      }),
    );
  };

  const handleImgPositionChange = (
    cardId: number,
    imgPosition: TImgPosition,
  ) => {
    dispatch(
      cardsStore.thunks.setCardPosition({
        cardId: cardId,
        imgPosition: imgPosition as TImgPosition,
      }),
    );
  };

  useEffect(() => {
    // dispatch(cardsStore.thunks.getCards());
  }, [dispatch]);

  return (
    <div className={'flex flex-col items-center gap-10 p-10'}>
      <div className={'flex flex-col gap-10 w-fit'}>
        <div className={'flex flex-row gap-4'}>
          <input
            value={counter}
            onChange={handleInputCounter}
            placeholder={'Counter'}
            className={'shadow h-[48px] p-4 rounded-2xl'}
          />
        </div>

        {cards?.cards && (
          <div className={'flex flex-row gap-10 w-fit'}>
            <div className={'flex flex-col gap-4'}>
              {Array.from({ length: 4 }, (_, i) => i).map((value) => {
                return (
                  cards?.cards && (
                    <CardEdit
                      key={cards.cards[value].id}
                      cardData={{ ...cards.cards[value] }}
                      onImgPositionChange={(imgPosition) => {
                        if (!cards.cards) {
                          return;
                        }

                        handleImgPositionChange(
                          cards.cards[value].id,
                          imgPosition as TImgPosition,
                        );
                      }}
                      onEditClose={() => {
                        if (!cards.cards) {
                          return;
                        }

                        handleEditOpen(cards.cards[value].id, false);
                      }}
                    >
                      <CardBody
                        cardData={{ ...cards.cards[value] }}
                        onOpenEdit={() => {
                          if (!cards.cards) {
                            return;
                          }

                          handleEditOpen(cards.cards[value].id, true);
                        }}
                      />
                    </CardEdit>
                  )
                );
              })}
            </div>

            <div className={'flex flex-col gap-4'}>
              {Array.from({ length: 4 }, (_, i) => i + 4).map((value) => {
                return (
                  cards?.cards && (
                    <CardEdit
                      key={cards.cards[value].id}
                      cardData={{ ...cards.cards[value] }}
                      onImgPositionChange={(imgPosition) => {
                        if (!cards.cards) {
                          return;
                        }

                        handleImgPositionChange(
                          cards.cards[value].id,
                          imgPosition as TImgPosition,
                        );
                      }}
                      onEditClose={() => {
                        if (!cards.cards) {
                          return;
                        }

                        handleEditOpen(cards.cards[value].id, false);
                      }}
                    >
                      <CardBody
                        cardData={{ ...cards.cards[value] }}
                        onOpenEdit={() => {
                          if (!cards.cards) {
                            return;
                          }

                          handleEditOpen(cards.cards[value].id, true);
                        }}
                      />
                    </CardEdit>
                  )
                );
              })}
            </div>

            <div className={'flex flex-col gap-4'}>
              {Array.from({ length: 2 }, (_, i) => i + 8).map((value) => {
                return (
                  cards?.cards && (
                    <CardEdit
                      key={cards.cards[value].id}
                      cardData={{ ...cards.cards[value] }}
                      onImgPositionChange={(imgPosition) => {
                        if (!cards.cards) {
                          return;
                        }

                        handleImgPositionChange(
                          cards.cards[value].id,
                          imgPosition as TImgPosition,
                        );
                      }}
                      onEditClose={() => {
                        if (!cards.cards) {
                          return;
                        }

                        handleEditOpen(cards.cards[value].id, false);
                      }}
                    >
                      <CardBody
                        cardData={{ ...cards.cards[value] }}
                        onOpenEdit={() => {
                          if (!cards.cards) {
                            return;
                          }

                          handleEditOpen(cards.cards[value].id, true);
                        }}
                      />
                    </CardEdit>
                  )
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
