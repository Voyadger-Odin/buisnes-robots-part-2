import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { CardProps } from '@/features/card';

export interface ICardsStore {
  cards?: TCard[];
}

export type TCard = CardProps & {
  id: number;
};
