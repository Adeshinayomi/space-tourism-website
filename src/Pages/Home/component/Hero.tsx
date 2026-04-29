import { Link } from "react-router-dom"
export function Hero(){
    return(
        <section className="w-full grid py-10 gap-10 content-between lg:grid-cols-2 lg:w-5/6 lg:mx-auto lg:h-screen lg:content-end ">
            <div className="w-5/6 mx-auto grid gap-7 text-White text-center lg:gap-5 lg:place-content-center lg:text-left lg:w-full md:w-1/2">
                <span className="text-md font-regular tracking-[.1rem] font-barlow lg:text-lg">SO, YOU WANT TO TRAVEL TO</span>
                <h1 className="text-7xl font-regular font-bellefair lg:text-9xl md:text-9xl">SPACE</h1>
                <p className="font-barlow leading-7 text-[15px] text-Blue300">  
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            <div className="lg:justify-self-end h-96 flex justify-center items-center w-96 rounded-full hover:bg-white/20 ease-in duration-300 md:justify-self-center">
                <button className="my-20 justify-self-center w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-White text-2xl lg:text-3xl font-bellefair ">
                    <Link to={'/destination'}>EXPLORE</Link>
                </button>
            </div>
        </section>
    )
}
