import React, { useState } from 'react';

const Card = ({children,color}) => {


    const handleChangeBackgorund=()=>{
        document.body.style.backgroundColor = color
    }
    
    const handleResetBackground=()=>{
        document.body.style.backgroundColor = ''
    }
  

  return (
    <article
    className=" border-primary-100 p-10 border flex items-start justify-between w-full rounded hover:flex-grow-[10] flex-1 relative  group  cursor-pointer hover:bg-white hover:shadow-md hover:shadow-red-400e"
    onMouseOver={handleChangeBackgorund}
            onMouseOut={handleResetBackground}
    >
      {children}
    </article>
  );
};

export default Card;
