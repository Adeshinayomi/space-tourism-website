import { useState } from 'react'
import type { destination } from '../../../Types/destinationType'
interface type{
    destination:destination[]
}
export function Hero({destination}:type){
   const [currentdestionation,setCurrentDestination]=useState(0)
    return(
        <section className='w-full grid mt-8 text-White gap-10 md:flex md:gap-10 md:h-screen md:content-end'>
            <div className='w-full grid gap-10  md:w-full mx-auto'>
                <h1 className='flex justify-center gap-5 text-lg font-barlow font-regular'> 
                    <span className='text-Dark font-barlow'>01</span>
                    PICK YOUR DESTINATION
                </h1>
                <div className='w-full mx-auto flex justify-end '>
                    <img src={destination[currentdestionation].images.png} alt="moon-image"/>
                </div>
            </div>

            <div className='w-5/6   mx-auto grid gap-10 md:place-content-center md:w-5/6'>
                <div className='w-5/6 mx-auto flex justify-between md:mx-0 md:w-1/2 md:text-sm'>
                    <button className={`text-White ${currentdestionation === 0 ?'underline decoration-4 underline-offset-8':''} hover:underline decoration-4 underline-offset-8`} onClick={()=>{
                        setCurrentDestination(0)
                    }}>MOON</button>
                    <button className={`text-White ${currentdestionation === 1 ?'underline decoration-4 underline-offset-8':''} hover:underline decoration-4 underline-offset-8`} onClick={()=>{
                        setCurrentDestination(1)
                    }}>MARS</button>
                    <button className={`text-White ${currentdestionation === 2 ?'underline decoration-4 underline-offset-8':''} hover:underline decoration-4 underline-offset-8`} onClick={()=>{
                        setCurrentDestination(2)
                    }}>EUROPA</button>
                    <button className={`text-White ${currentdestionation === 3 ?'underline decoration-4 underline-offset-8':''} hover:underline decoration-4 underline-offset-8`} onClick={()=>{
                        setCurrentDestination(3)
                    }}>TITAN</button>
                </div>
                <h1 className='text-5xl md:text-3xl font-bellefair font-regular text-center md:text-left'>{destination[currentdestionation].name.toUpperCase()}</h1>
                <p className='md:w-2/3 text-center text-White md:text-Blue300 text-lg md:text-sm font-barlow md:text-left'>
                    {destination[currentdestionation].description}
                </p>
                <hr className='md:w-2/3'/>
                <div className='md:w-2/3 md:mx-0 text-White text-center mb-10 w-5/6 mx-auto grid gap-10 justify-center font-bellefair md:flex md:justify-between'>
                <div className='grid gap-2 '>
                    <span className='text-md font-regular text-Blue300'> AVG. DISTANCE</span>
                    <p className='text-4xl md:text-lg'>{destination[currentdestionation].distance.toUpperCase()}</p>
                </div>
                <div>
                    <span className='font-regular text-md text-Blue300'>EST. TRAVEL TIME</span>
                    <p className='text-4xl md:text-lg'>{destination[currentdestionation].travel.toUpperCase()}</p>
                </div>
            </div>
            </div>
        </section>
    )
}