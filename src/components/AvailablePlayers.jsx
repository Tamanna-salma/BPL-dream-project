
import { use } from "react"
import userImg from "../assets/Group.png"
import flagImg from "../assets/flag-1.png"
const AvailablePlayers = ({ PlayersPromise }) => {
    const PlayersData = use(PlayersPromise)
    console.log(PlayersData);

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 space-y-4">
            {
                PlayersData.map(player =><div className="card bg-base-100 w-80 shadow-sm p-4">
                <figure>
                    <img
                        src={player.img}
                        alt="Shoes" className="w-96 h-60 object-cover " />
                </figure>
                <div className="mt-3">
                    <div className="flex gap-2">
                        <img src={userImg} alt="" />
                        <h2 className="card-title">{player.name}</h2>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex items-center gap-3 mt-2">
                            <img className="h-5" src={flagImg} alt="" />
                            <p>Bangladesh</p>
                        </div>
                        <button className="btn p-1">{player.role}</button>
                    </div>
                    <hr className="text-gray-400 h-3 mt-3" />

                    <div className="flex justify-between font-bold">
                        <span>Rating</span>
                        <span>{player.rating}</span>
                    </div>

                    <div className="flex justify-between mt-2">
                        <span className=" font-bold">{player.batting}</span>
                        <span className="text-gray-500">{player.bowling}</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <p className="mt-1 font-bold">Price: <span>{player.price}</span></p>
                        <button className="btn mt-3 p-2">chose Player</button>
                    </div>
                </div>
            </div>
            )

            }
            
        </div>
    )
}

export default AvailablePlayers