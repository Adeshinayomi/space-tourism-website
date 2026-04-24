import { Route,Routes } from "react-router-dom"
import { Homepage } from "./Pages/Home/page"
import { Destination } from "./Pages/Destination/Page"
import { Crew } from "./Pages/Crew/page"
import { Technology } from "./Pages/Technology/page"
function App() {
  return(
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  ) 
 }

export default App
