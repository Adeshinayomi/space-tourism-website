import { Header } from "../../components/Header"
import { Hero } from "./component/Hero"
export function Homepage(){
    return(
        <div className="min-h-screen bg-background-home-mobile bg-no-repeat bg-center bg-fixed">
            <Header />
            <Hero />
        </div>
    )
}