import React, { useRef } from 'react'

export default function ContenedorVide({videoSrc}) {

const refVideo=useRef(null)

const handleMouseEnter = () => {
    console.log('first')
    if (refVideo.current) {
      refVideo.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (refVideo.current) {
      refVideo.current.pause();
    }
  };


  return (
    <div ref={refVideo}
    onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    class="flex items-center justify-between w-full h-auto  relative gap-3 ">
             <video src={videoSrc} class=" object-cover w-full h-60" controls></video>
        </div>
  )
}
