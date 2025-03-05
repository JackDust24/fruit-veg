import { useFoodContext } from '@/context/FoodContext';
import { Food } from '@/lib/types';
import React from 'react';
import ListHeader from './ListHeader';
import { Button } from './ui/button';

export type ListMainItemsProps = {
  title: string;
  items: Food[] | [];
};

export const ListMainItems = ({ title, items }: ListMainItemsProps) => {
  const { onMoveToColumn } = useFoodContext();

  return (
    <ListHeader title={title}>
      {items.map((item, index) => (
        <Button
          key={`${item.name}-${index}`}
          onClick={() => onMoveToColumn(item)}
          variant={item.type === 'Vegetable' ? 'veg' : 'fruit'}
        >
          {item.name}
        </Button>
      ))}
    </ListHeader>
  );
};
