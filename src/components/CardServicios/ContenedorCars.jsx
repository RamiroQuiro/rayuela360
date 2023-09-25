import React, { useEffect, useRef, useState } from 'react'

export default function ContenedorCars({ children, deg }) {

const [isIntersecting, setIsIntersecting] = useState(false)
    const referencia = useRef(null)

    useEffect(() => {
        if (!referencia.current) return

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
    setIsIntersecting(state=>!state)
            })
        },{
            threshold:0.5
        })
        observer.observe(referencia.current)
    }, [])

    return (
        <div
        id="fotosPolaroid"
            ref={referencia}
            style={{
                transform: `rotate(${deg}deg)`,
            }}
            className={`${isIntersecting?'opacity-100':'opacity-0'} bg-white md:w-[350px] w-full border min-h-[400px] rounded p-5 flex flex-col items-center justify-normal shadow-md hover:bg-white/80 cursor-pointer  duration-300 hover:backdrop-blur-sm group`}>{children}</div>
    )
}
