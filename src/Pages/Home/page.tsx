import { Header } from "../../components/Header"
import { Hero } from "./component/Hero"
export function Homepage(){
    return(
        <div className="w-full min-h-screen bg-background-home-mobile md:bg-background-tablet lg:bg-background-home-desktop bg-no-repeat md:bg-cover lg:bg-center lg:bg-fixed">
            <Header />
            <Hero />
        </div>
    )
}