import React, { useRef, useState } from 'react';

const Card = ({ children, color,idContenedorVideo,idVideo }) => {


  const handleChangeBackgorund = () => {
    const refvideo= document.getElementById(idVideo)
    
    const contenedorVideo=document.getElementById(idContenedorVideo)
    const cardExperience = document.getElementById('seccionExperiencia')
    refvideo.play()
    document.body.style.backgroundColor = color
    cardExperience.style.backgroundColor = "transparent"
    contenedorVideo.style.width='100%'
    contenedorVideo.style.borderRadius='4px 4px 4px 4px'
    contenedorVideo.style.height='auto'
  }
  
  const handleResetBackground = () => {
    const refvideo= document.getElementById(idVideo)
    const contenedorVideo=document.getElementById(idContenedorVideo)
    const cardExperience = document.getElementById('seccionExperiencia')
    refvideo.pause()
    document.body.style.backgroundColor = ''
    cardExperience.style.backgroundColor = "white"
    contenedorVideo.style.borderRadius='0 0 0 100%'
    contenedorVideo.style.width='50%'
    contenedorVideo.style.height='auto'

    
  }


  return (
    <article
      className=" border-primary-100 overflow-hidden duration-300 gap-x-10  border flex items-center justify-between w-full rounded hover:flex-grow-[10] flex-1 relative  group  cursor-pointer hover:bg-white hover:shadow-xl  hover:shadow-primary-100-400/20 "
      onMouseOver={handleChangeBackgorund}
      onMouseOut={handleResetBackground}
    >
      {children}
    </article>
  );
};

export default Card;
