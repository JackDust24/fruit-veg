'use client';
import React from 'react';
import { ListMainItems } from './mainItems/ListMainItems';
import FruitsDisplay from './columnItems/FruitsDisplay';
import VegDisplay from './columnItems/VegDisplay';

export const MainArea = () => {
  return (
    <div className='flex flex-row p-4'>
      <div className='w-1/4 p-4'>
        <ListMainItems />
      </div>
      <div className='w-3/4 flex flex-row p-4 space-x-4'>
        <div className='w-1/2'>
          <FruitsDisplay />
        </div>
        <div className='w-1/2'>
          <VegDisplay />
        </div>
      </div>
    </div>
  );
};
