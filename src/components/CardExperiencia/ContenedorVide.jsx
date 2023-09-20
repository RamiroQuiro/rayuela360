import React, { useRef } from 'react'

export default function ContenedorVide({ videoSrc,idVideo }) {

    const refVideo = useRef(null)

    const handleMouseEnter = () => {
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
        <div 
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-between w-full h-full   relative   ">
            <video  id={idVideo} ref={refVideo} h- className=" object-cover h-full  w-full   " loop muted >
                <source  src={videoSrc} type='video/mp4' />
            </video>
        </div>
    )
}
