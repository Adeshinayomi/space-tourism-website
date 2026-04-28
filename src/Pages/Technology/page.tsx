import { Header } from "../../components/Header"
import { Hero } from "./components/Hero"
import type { tech } from "../../Types/techType"

interface type{
    tech:tech[]
}
export function Technology({tech}:type){
    return(
        <div className="w-full min-h-screen bg-background-tech-mobile md:bg-background-tech-desktop bg-no-repeat bg-cover bg-fixed">
            <Header />
            <Hero tech={tech}/>
        </div>
    )
}




