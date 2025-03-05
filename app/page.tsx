import React from 'react';
import { FoodProvider } from './context/FoodContext';
import { MainArea } from './components/MainArea';

const Page = () => {
  return (
    <FoodProvider>
      <MainArea />
    </FoodProvider>
  );
};

export default Page;
