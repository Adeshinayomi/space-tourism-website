import { Header } from "../../components/Header"
import { Hero } from "./components/Hero"
import type { destination } from "../../Types/destinationType"

interface types{
    destination:destination[]
}
export function Destination({destination}:types){
    return(
        <div className="min-h-screen bg-background-destination-mobile bg-no-repeat bg-cover bg-fixed">
            <Header />
            <Hero destination={destination}/>
        </div>
    )
}