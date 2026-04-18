import { Header } from "../../components/Header"
import { Hero } from "./components/Hero"
export function Destination(){
    return(
        <div className="min-h-screen bg-background-destination-mobile bg-no-repeat bg-cover bg-fixed">
            <Header />
            <Hero />
        </div>
    )
}