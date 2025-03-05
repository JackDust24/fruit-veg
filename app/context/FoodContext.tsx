'use client';
import { Food } from '@/lib/types';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { data } from '@/data/data';
import { moveItemToColumn, moveItemBackToList } from '@/lib/foodUtils';

type FoodContextProps = {
  foodItems: Food[] | [] | null;
  fruits: Food[] | [];
  vegetables: Food[] | [];
  onMoveToColumn: (item: Food) => void;
  onMoveBackToList: (item: Food) => void;
};

const FoodContext = createContext<FoodContextProps | undefined>(undefined);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [foodItems, setFoodItems] = useState<Food[] | [] | null>(null);
  const [fruits, setFruits] = useState<Food[] | []>([]);
  const [vegetables, setVegetables] = useState<Food[] | []>([]);

  const fruitTimers = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const vegetableTimers = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    if (foodItems === null) {
      setFoodItems(data);
    }
  }, [foodItems]);

  const handleMoveToColumn = (item: Food) => {
    if (item.type === 'Fruit') {
      moveItemToColumn(item, setFruits, fruitTimers, handleMoveBackToList);
    } else if (item.type === 'Vegetable') {
      moveItemToColumn(
        item,
        setVegetables,
        vegetableTimers,
        handleMoveBackToList
      );
    }
    setFoodItems(
      (prev) => prev?.filter((_item) => _item.name !== item.name) || []
    );
  };

  const handleMoveBackToList = (item: Food) => {
    setFoodItems((prev) => (prev ? [...prev, item] : []));
    if (item.type === 'Fruit') {
      moveItemBackToList(item, setFruits, fruitTimers);
    } else if (item.type === 'Vegetable') {
      moveItemBackToList(item, setVegetables, vegetableTimers);
    }
  };

  return (
    <FoodContext.Provider
      value={{
        foodItems,
        fruits,
        vegetables,
        onMoveToColumn: handleMoveToColumn,
        onMoveBackToList: handleMoveBackToList,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFoodContext must be used within a FoodProvider');
  }
  return context;
};
