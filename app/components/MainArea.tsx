'use client';
import { useFoodContext } from '../context/FoodContext';
import { ListDisplay } from './ListDisplay';
import { ListMainItems } from './ListMainItems';

export const MainArea = () => {
  const { foodItems, fruits, vegetables } = useFoodContext();

  return (
    <div className='flex flex-row p-4'>
      <div className='w-1/4 p-4'>
        <ListMainItems title='Main List' items={foodItems || []} />
      </div>
      <div className='w-3/4 flex flex-row p-4 space-x-4'>
        <div className='w-1/2'>
          <ListDisplay title='Fruit' items={fruits} />
        </div>
        <div className='w-1/2'>
          <ListDisplay title='Vegetables' items={vegetables} />
        </div>
      </div>
    </div>
  );
};
