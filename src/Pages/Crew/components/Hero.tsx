import Douglas from '../../../assets/crew/image-douglas-hurley.png'
export function Hero(){
    return(
        <section className="w-full text-white grid gap-16">
            <h1 className="font-barlowfont-regular text-xl justify-center flex gap-5">
                <span className="text-[#979797] font-barlow font-bold">02</span>
                MEET YOUR CREW
            </h1>

            <div className="w-[90%] mx-auto grid gap-7">
                <div className="text-center grid gap-2 font-bellefair">
                    <span className="text-Dark text-lg">COMMANDER</span>
                    <h1 className="text-3xl">DOUGLAS HURLEY</h1>
                </div>
                <p className="text-center font-barlow text-md text-Blue300">
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                </p>
            </div>

            <div className="w-1/2 mx-auto flex justify-center gap-5">
                <button className="p-2 rounded-full bg-White"></button>
                <button className="p-2 rounded-full bg-[#979797]"></button>
                <button className="p-2 rounded-full bg-[#979797]"></button>
                <button className="p-2 rounded-full bg-[#979797]"></button>
            </div>

            <div className='w-5/6 mx-auto mb-10'>
                <img src={Douglas} alt="douglas harley" />
            </div>
        </section>
    )
}