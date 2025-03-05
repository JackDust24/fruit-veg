import React, { memo, ReactNode } from 'react';

export type ListHeaderProps = {
  title: string;
  children: ReactNode;
};

const ListHeader = ({ title, children }: ListHeaderProps) => {
  return (
    <div className='p-4 border rounded shadow'>
      <h2 className='text-lg font-semibold mb-2'>{title}</h2>
      <div className='flex flex-wrap gap-2'>{children}</div>
    </div>
  );
};

export default memo(ListHeader);
