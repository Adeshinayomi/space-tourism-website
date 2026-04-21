import moon from '../../../assets/destination/image-moon.png'
export function Hero(){
    return(
        <section className='w-full grid mt-8 text-White gap-10'>
            <div className='w-full grid gap-10'>
                <h1 className='flex justify-center gap-5 text-lg font-barlow font-regular'> 
                    <span className='text-Dark font-barlow'>01</span>
                    PICK YOUR DESTINATION
                </h1>
                <div className='w-1/2 mx-auto'>
                    <img src={moon} alt="moon image"/>
                </div>
            </div>

            <div className='w-5/6 mx-auto grid gap-10'>
                <div className='w-5/6 mx-auto flex justify-between'>
                    <button className={`text-White underline decoration-4 underline-offset-8`}>MOON</button>
                    <button className={`text-Blue300`}>MARS</button>
                    <button className={`text-Blue300`}>EUROPA</button>
                    <button className={`text-Blue300`}>TITAN</button>
                </div>
                <h1 className='text-5xl font-bellefair font-regular text-center'>MOON</h1>
                <p className='text-center text-White text-lg font-barlow'>
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <hr />
            </div>
            <div className='text-White text-center mb-10 w-5/6 mx-auto grid gap-10 justify-center font-bellefair'>
                <div className='grid gap-2 '>
                    <span className='text-md font-regular text-Blue300'> AVG. DISTANCE</span>
                    <p className='text-4xl'>384,400 KM</p>
                </div>
                <div>
                    <span className='font-regular text-md text-Blue300'>EST. TRAVEL TIME</span>
                    <p className='text-4xl'> 3 DAYS</p>
                </div>
            </div>
        </section>
    )
}