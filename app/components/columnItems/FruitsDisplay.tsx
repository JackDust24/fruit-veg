import { useFoodContext } from '@/context/FoodContext';
import React from 'react';
import ListDisplay from '../shared/ListDisplay';

const FruitsDisplay = () => {
  const { fruits } = useFoodContext();

  return (
    <>
      <ListDisplay title='Fruit' items={fruits} />
    </>
  );
};

export default FruitsDisplay;
