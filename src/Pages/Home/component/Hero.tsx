import { Link } from "react-router-dom"
export function Hero(){
    return(
        <section className="w-full grid py-10 gap-10 content-between ">
            <div className="w-5/6 mx-auto grid gap-7 text-White text-center">
                <span className="text-md font-regular tracking-[.1rem] font-barlow">SO, YOU WANT TO TRAVEL TO</span>
                <h1 className="text-7xl font-regular font-bellefair">SPACE</h1>
                <p className="font-barlow leading-7 text-[15px]">  
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            <button className="my-20 justify-self-center w-48 h-48 rounded-full bg-White text-2xl font-bellefair">
                <Link to={'/destination'}>EXPLORE</Link>
            </button>
        </section>
    )
}
