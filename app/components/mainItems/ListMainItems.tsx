import { useFoodContext } from '@/context/FoodContext';
import React from 'react';
import ListHeader from '../shared/ListHeader';
import { Button } from '../ui/button';

export const ListMainItems = () => {
  const { foodItems: items, onMoveToColumn } = useFoodContext();

  return (
    <ListHeader title={'Main Items'}>
      {items
        ? items.map((item, index) => (
            <Button
              key={`${item.name}-${index}`}
              onClick={() => onMoveToColumn(item)}
              variant={item.type === 'Vegetable' ? 'veg' : 'fruit'}
            >
              {item.name}
            </Button>
          ))
        : null}
    </ListHeader>
  );
};
