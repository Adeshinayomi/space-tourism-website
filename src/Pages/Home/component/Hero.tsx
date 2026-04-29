import { Link } from "react-router-dom"
export function Hero(){
    return(
        <section className="w-full grid py-10 gap-10 content-between md:grid-cols-2 md:w-5/6 md:mx-auto md:h-screen md:content-end ">
            <div className="w-5/6 mx-auto grid gap-7 text-White text-center md:gap-5 md:place-content-center md:text-left md:w-full">
                <span className="text-md font-regular tracking-[.1rem] font-barlow md:text-lg">SO, YOU WANT TO TRAVEL TO</span>
                <h1 className="text-7xl font-regular font-bellefair md:text-9xl">SPACE</h1>
                <p className="font-barlow leading-7 text-[15px] text-Blue300">  
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            <div className="md:justify-self-end h-96 flex justify-center items-center w-96 rounded-full hover:bg-white/20 ease-in duration-300">
                <button className="my-20 justify-self-center w-48 h-48 md:w-64 md:h-64 rounded-full bg-White text-2xl md:text-3xl font-bellefair ">
                    <Link to={'/destination'}>EXPLORE</Link>
                </button>
            </div>
        </section>
    )
}
