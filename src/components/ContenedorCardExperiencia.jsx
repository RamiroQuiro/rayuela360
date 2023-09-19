import React, { useState } from 'react';

const Card = ({children}) => {


    const handleChangeBackgorund=()=>{
        document.body.style.backgroundColor = '#d1d0f1'
    }
    
    const handleResetBackground=()=>{
        document.body.style.backgroundColor = ''
    }
  

  return (
    <article
    onClick={handleChangeBackgorund}
    className=" border-primary-100 p-10 border flex items-start justify-between w-full flex-auto rounded"
    onMouseOver={handleChangeBackgorund}
            onMouseOut={handleResetBackground}
    >
      {children}
    </article>
  );
};

export default Card;
