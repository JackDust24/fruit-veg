import { useFoodContext } from '@/context/FoodContext';
import { Food } from '@/lib/types';
import React from 'react';
import ListHeader from './ListHeader';
import { Button } from './ui/button';

export interface ListDisplayProps {
  title: string;
  items: Food[] | [];
}

export const ListDisplay = ({ title, items }: ListDisplayProps) => {
  const { onMoveBackToList } = useFoodContext();

  return (
    <ListHeader title={title}>
      {items.map((item, index) => (
        <Button
          key={`${item.name}-${index}`}
          onClick={() => onMoveBackToList(item)}
          variant={item.type === 'Vegetable' ? 'veg' : 'fruit'}
        >
          {item.name}
        </Button>
      ))}
    </ListHeader>
  );
};
