import { ToastContainer} from 'react-toastify';
import { Suspense, useState } from "react"
import AvailablePlayers from "./components/AvailablePlayers"
import Navber from "./components/Navber"

import Selected from "./components/Selected"
 const fetchPlayer =async()=>{
  const res= await fetch("/Players.json")
  // console.log(fetch("/Players.json"));
  return res.json()
 }
   const PlayersPromise = fetchPlayer()
function App() {
  const [toggle,settoggle]=useState(true);
  const[AvailableBalance ,setAvailableBalance]=useState(450000);
  const [purchedPlayer,setpurchedPlayer]=useState([]);

const removePlayer =(p)=>{
  console.log(p);
  const filteredData =purchedPlayer.filter(ply=>ply.name!==p.name)
  console.log(filteredData);
  setpurchedPlayer(filteredData)
  setAvailableBalance(AvailableBalance+ parseInt(p.price.split("USD").join("").split("Million").join("")))
}


  return (
    <>
    <Navber AvailableBalance={AvailableBalance}></Navber>
    <div className="max-w-6xl flex justify-between items-center mx-auto">
      <h4 className="font-bold text-2xl">{toggle===true?"Available Players":`Selected Player (${purchedPlayer.length}/6)`
    }</h4>

      <div className="font-bold">
        <button onClick={()=>settoggle(true)} className={`py-3 px-3 ${toggle===true?"bg-[#E7FE29]":""}  border-gray-400 rounded-l-xl border-r-0 shadow hover:bg-yellow-200 `}>Avaliable</button>

        <button onClick={()=>settoggle(false)} className={`rounded-r-xl border-l-0 px-3 py-3 shadow hover:bg-gray-300 ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>{purchedPlayer.length}</span></button>
      </div>
    </div>
{
  toggle===true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <AvailablePlayers AvailableBalance={AvailableBalance} purchedPlayer={purchedPlayer} setpurchedPlayer={setpurchedPlayer}
    setAvailableBalance={setAvailableBalance} PlayersPromise={PlayersPromise}></AvailablePlayers>
</Suspense>:<Selected removePlayer={removePlayer} purchedPlayer={purchedPlayer}></Selected> 
}

 <ToastContainer></ToastContainer>
    </>
  )
}
export default App



