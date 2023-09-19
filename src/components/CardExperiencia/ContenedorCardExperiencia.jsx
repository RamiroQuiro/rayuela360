import React, { useState } from 'react';

const Card = ({children,color}) => {


    const handleChangeBackgorund=()=>{
        document.body.style.backgroundColor = color
        document.getElementById('seccionExperiencia').style.backgroundColor="transparent"
      }
      
      const handleResetBackground=()=>{
        document.body.style.backgroundColor = ''
        document.getElementById('seccionExperiencia').style.backgroundColor="white"
    }
  

  return (
    <article
    className=" border-primary-100 overflow-hidden gap-x-10 p-10 border flex items-start justify-between w-full rounded hover:flex-grow-[10] flex-1 relative  group  cursor-pointer hover:bg-white hover:shadow-xl  hover:shadow-primary-100-400/20 "
    onMouseOver={handleChangeBackgorund}
            onMouseOut={handleResetBackground}
    >
      {children}
    </article>
  );
};

export default Card;
