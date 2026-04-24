import spaceVehicle from '../../../assets/technology/image-launch-vehicle-portrait.jpg'
export function Hero(){
    return(
        <section className='text-white grid'>
            <div className='grid gap-7'>
                <h1 className='flex text-center text-lg justify-center gap-5'>
                    <span className='text-lg font-barlow text-Dark/75'>03</span>
                    SPACE LAUNCH 101
                </h1>

                <div className='w-full h-72 mt-16 '>
                    <img src={spaceVehicle} alt="space-vehicle-potrait" className='w-full h-full object-cover '/>
                </div>

                <div className='flex justify-center font-bellefair gap-7'>
                    <button className='border text-2xl border-White h-14 w-14 rounded-full bg-White text-black'>1</button>
                    <button className='border text-2xl border-White h-14 w-14 rounded-full hover:bg-White hover:text-black'>2</button>
                    <button className='border text-2xl border-White h-14 w-14 rounded-full hover:bg-White hover:text-black'>3</button>                                        
                </div>


                <div className='w-5/6 mx-auto grid gap-5 text-center my-10'>
                    <div className='grid gap-2 font-bellefair'>
                        <span className='text-Dark'>THE TERMINOLOGY...</span>
                        <h1 className='text-2xl'>LAUNCH VEHICLE</h1>
                    </div>
                    <p className='font-barlow text-Blue300 text-lg'>
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                        it's quite an awe-inspiring sight on the launch pad!
                    </p>
                </div>
            </div>
        </section>
    )
}