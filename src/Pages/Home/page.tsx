import { Header } from "../../components/Header"
import { Hero } from "./component/Hero"
export function Homepage(){
    return(
        <div className="min-h-screen bg-background-home-mobile md:bg-background-home-desktop bg-no-repeat bg-center bg-fixed">
            <Header />
            <Hero />
        </div>
    )
}