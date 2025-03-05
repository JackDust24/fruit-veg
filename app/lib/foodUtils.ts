import { Food } from '@/lib/types';
import { Dispatch, SetStateAction, RefObject } from 'react';

export const moveItemToColumn = (
  item: Food,
  setColumn: Dispatch<SetStateAction<Food[]>>,
  timers: RefObject<{ [key: string]: NodeJS.Timeout }>,
  onMoveBackToList: (item: Food) => void
) => {
  setColumn((prev) => [...prev, item]);
  timers.current[item.name] = setTimeout(() => {
    onMoveBackToList(item);
  }, 5000);
};

export const moveItemBackToList = (
  item: Food,
  setColumn: Dispatch<SetStateAction<Food[]>>,
  timers: RefObject<{ [key: string]: NodeJS.Timeout }>
) => {
  clearTimeout(timers.current[item.name]);
  delete timers.current[item.name];
  setColumn((prev) => prev.filter((i) => i.name !== item.name));
};
