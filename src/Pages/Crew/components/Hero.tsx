import type { crew } from '../../../Types/crewType'
import { useState } from 'react'
interface type{
    crew:crew[]
}
export function Hero({crew}:type){
    const [currentCrew,setCurrentCrew]=useState(0)
    return(
        <section className="w-full text-white grid gap-16">
            <h1 className="font-barlowfont-regular text-xl justify-center flex gap-5">
                <span className="text-[#979797] font-barlow font-bold">02</span>
                MEET YOUR CREW
            </h1>

            <div className="w-[90%] mx-auto grid gap-7">
                <div className="text-center grid gap-2 font-bellefair">
                    <span className="text-Dark text-lg">{crew[currentCrew].role.toUpperCase()}</span>
                    <h1 className="text-3xl">{crew[currentCrew].name.toUpperCase()}</h1>
                </div>
                <p className="text-center font-barlow text-md text-Blue300">
                    {crew[currentCrew].bio}
                </p>
            </div>

            <div className="w-1/2 mx-auto flex justify-center gap-5">
                <button className={`p-2 rounded-full ${currentCrew === 0?'bg-White':'bg-[#979797]'} hover:bg-White`} onClick={()=>{
                    setCurrentCrew(0)
                }}></button>
                <button className={`p-2 rounded-full ${currentCrew === 1?'bg-White':'bg-[#979797]'} hover:bg-White`} onClick={()=>{
                    setCurrentCrew(1)
                }}></button>
                <button className={`p-2 rounded-full ${currentCrew === 2?'bg-White':'bg-[#979797]'} hover:bg-White`} onClick={()=>{
                    setCurrentCrew(2)
                }}></button>
                <button className={`p-2 rounded-full ${currentCrew === 3?'bg-White':'bg-[#979797]'} hover:bg-White`} onClick={()=>{
                    setCurrentCrew(3)
                }}></button>
            </div>

            <div className='w-5/6 mx-auto mb-10'>
                <img src={crew[currentCrew].images.png} alt="douglas harley" />
            </div>
        </section>
    )
}