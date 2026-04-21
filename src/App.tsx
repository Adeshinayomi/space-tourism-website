import { Route,Routes } from "react-router-dom"
import { Homepage } from "./Pages/Home/page"
import { Destination } from "./Pages/Destination/Page"
import { Crew } from "./Pages/Crew/page"
function App() {
  return(
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
      </Routes>
    </>
  )
 }

export default App
