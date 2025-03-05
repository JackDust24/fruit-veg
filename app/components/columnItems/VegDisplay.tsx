import { useFoodContext } from '@/context/FoodContext';
import React, { memo } from 'react';
import ListDisplay from '../shared/ListDisplay';

const VegDisplay = () => {
  const { vegetables } = useFoodContext();

  return (
    <>
      <ListDisplay title='Vegetables' items={vegetables} />
    </>
  );
};

export default memo(VegDisplay);
