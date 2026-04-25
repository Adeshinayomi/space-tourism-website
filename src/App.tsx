import { Route,Routes } from "react-router-dom"
import { useEffect,useState } from "react"
import type { destination } from "./Types/destinationType"
import { Homepage } from "./Pages/Home/page"
import { Destination } from "./Pages/Destination/Page"
import { Crew } from "./Pages/Crew/page"
import { Technology } from "./Pages/Technology/page"
function App() {
    const [destinationData,setDestinationData]=useState<destination[]>([])

    useEffect(() => {
      fetch("/data.json")
        .then(res => res.json())
        .then(data => setDestinationData(data.destinations));
    });
  return(
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/destination" element={<Destination destination={destinationData}/>}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  ) 
 }

export default App
