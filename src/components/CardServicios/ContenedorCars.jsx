import React, { useEffect, useInsertionEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../../hook/useIntersection'

export default function ContenedorCars({ children, deg }) {


    return (
        <div
      
            style={{
                transform: `rotate(${deg}deg)`,
            }}
            className={`${''} bg-white md:w-[350px] w-full border min-h-[400px] rounded p-5 flex flex-col items-center justify-normal shadow-md hover:bg-white/80 cursor-pointer  duration-300 hover:backdrop-blur-sm group`}>{children}</div>
    )
}
