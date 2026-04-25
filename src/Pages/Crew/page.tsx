import { Header } from "../../components/Header"
import { Hero } from "./components/Hero"
import type { crew } from "../../Types/crewType"

interface type{
    crew:crew[]
}
export function Crew({crew}:type){
    return(
        <div className="min-h-screen bg-background-crew-mobile bg-cover bg-no-repeat bg-fixed">
            <Header />
            <Hero crew={crew}/>
        </div>

    )
}