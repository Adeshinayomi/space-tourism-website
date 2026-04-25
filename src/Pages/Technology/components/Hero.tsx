import spaceVehicle from '../../../assets/technology/image-launch-vehicle-portrait.jpg'
import type { tech } from '../../../Types/techType'
import { useState } from 'react'

interface type{
    tech:tech[]
}
export function Hero({tech}:type){
    const [currentTech,setCurreentTech]=useState(0)

    return(
        <section className='text-white grid'>
            <div className='grid gap-7'>
                <h1 className='flex text-center text-lg justify-center gap-5'>
                    <span className='text-lg font-barlow text-Dark/75'>03</span>
                    SPACE LAUNCH 101
                </h1>

                <div className='w-full h-72 mt-16 '>
                    <img src={tech[currentTech].images.portrait} alt="space-vehicle-potrait" className='w-full h-full object-cover '/>
                </div>

                <div className='flex justify-center font-bellefair gap-7'>
                    <button className={`border text-2xl border-White h-14 w-14 rounded-full ${currentTech === 0?'bg-White text-black':''} hover:bg-White hover:text-black`} onClick={()=>{
                        setCurreentTech(0)
                    }}>1</button>
                    <button className={`border text-2xl border-White h-14 w-14 rounded-full ${currentTech === 1?'bg-White text-black':''} hover:bg-White hover:text-black`} onClick={()=>{
                        setCurreentTech(1)
                    }}>2</button>
                    <button className={`border text-2xl border-White h-14 w-14 rounded-full ${currentTech === 2?'bg-White text-black':''} hover:bg-White hover:text-black`} onClick={()=>{
                        setCurreentTech(2)
                    }}>3</button>                                        
                </div>


                <div className='w-5/6 mx-auto grid gap-5 text-center my-10'>
                    <div className='grid gap-2 font-bellefair'>
                        <span className='text-Dark'>THE TERMINOLOGY...</span>
                        <h1 className='text-2xl'>{tech[currentTech].name.toUpperCase()}</h1>
                    </div>
                    <p className='font-barlow text-Blue300 text-lg'>
                        {tech[currentTech].description}
                    </p>
                </div>
            </div>
        </section>
    )
}