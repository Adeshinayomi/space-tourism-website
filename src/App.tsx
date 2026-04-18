import { Route,Routes } from "react-router-dom"
import { Homepage } from "./Pages/Home/page"
import { Destination } from "./Pages/Destination/Page"
function App() {
  return(
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/destination" element={<Destination />}/>
      </Routes>
    </>
  )
 }

export default App
