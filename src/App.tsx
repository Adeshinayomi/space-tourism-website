import { Route,Routes } from "react-router-dom"
import { useEffect,useState } from "react"
import type { destination } from "./Types/destinationType"
import type { crew } from "./Types/crewType"
import type { tech } from "./Types/techType"
import { Homepage } from "./Pages/Home/page"
import { Destination } from "./Pages/Destination/Page"
import { Crew } from "./Pages/Crew/page"
import { Technology } from "./Pages/Technology/page"
function App() {
    const [destinationData,setDestinationData]=useState<destination[]>([])
    const [crewData,setCrewData]=useState<crew[]>([])
    const [techData,setTechData]=useState<tech[]>([])

    useEffect(() => {
      fetch("/data.json")
        .then(res => res.json())
        .then(data => {
          setDestinationData(data.destinations)
          setCrewData(data.crew)
          setTechData(data.technology)
        });
    });
  return(
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/destination" element={<Destination destination={destinationData}/>}/>
        <Route path="/crew" element={<Crew crew={crewData}/>}/>
        <Route path="/technology" element={<Technology tech={techData}/>} />
      </Routes>
    </>
  ) 
 }

export default App
