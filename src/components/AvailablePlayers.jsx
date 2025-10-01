
import { use,} from "react"
import PlayerCard from "./PlayerCard"

const AvailablePlayers = ({ PlayersPromise , setAvailableBalance,AvailableBalance, purchedPlayer,setpurchedPlayer}) => { 
   
    const PlayersData = use(PlayersPromise)
    // console.log(PlayersData);

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 space-y-4 mt-5">
            {
                PlayersData.map(player =><PlayerCard purchedPlayer={purchedPlayer} setpurchedPlayer={setpurchedPlayer}  AvailableBalance={AvailableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
            )

            }
            
        </div>
    )
}

export default AvailablePlayers