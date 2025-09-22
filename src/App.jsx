
import { Suspense } from "react"
import AvailablePlayers from "./components/AvailablePlayers"
import Navber from "./components/Navber"

import Selected from "./components/Selected"
 const fetchPlayer =async()=>{
  const res= await fetch("/Players.json")
  // console.log(fetch("/Players.json"));
  return res.json()
 }

function App() {
   const PlayersPromise = fetchPlayer()
  return (
    <>
    <Navber></Navber>
    
<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <AvailablePlayers PlayersPromise={PlayersPromise}></AvailablePlayers>
</Suspense>
{/* <Selected></Selected> */}
    </>
  )
}
export default App



