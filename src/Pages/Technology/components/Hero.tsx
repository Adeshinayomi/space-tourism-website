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
                <h1 className='flex text-center text-lg justify-center gap-5 md:w-1/3 '>
                    <span className='text-lg font-barlow text-Dark/75 md:pl-10'>03</span>
                    SPACE LAUNCH 101
                </h1>
                <div className='grid gap-7 md:flex flex-row-reverse md:py-16'>
                    <div className='mt-16 md:hidden'>
                        <img src={tech[currentTech].images.landscape} alt="space-vehicle-potrait"/>
                    </div>
                    <div className='hidden md:grid w-2/3'>
                        <img src={tech[currentTech].images.portrait} alt="space-vehicle-potrait" className='w-full'/>
                    </div>


                    <div className='md:w-full grid md:flex'>
                        <div className='flex justify-center font-bellefair gap-7 md:grid md:content-center md:w-1/2 mx-auto'>
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


                        <div className='w-5/6 mx-auto grid gap-5 text-center my-10 md:text-left md:w-2/3 md:content-center'>
                            <div className='grid gap-2 font-bellefair'>
                                <span className='text-Dark md:text-2xl'>THE TERMINOLOGY...</span>
                                <h1 className='text-2xl md:text-4xl'>{tech[currentTech].name.toUpperCase()}</h1>
                            </div>
                            <p className='font-barlow text-Blue300 text-lg'>
                                {tech[currentTech].description}
                            </p>
                        </div>            
                    </div>
                </div>
            </div>
        </section>
    )
}