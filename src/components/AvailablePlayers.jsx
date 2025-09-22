
import { use } from "react"
import userImg from "../assets/Group.png"
import flagImg from "../assets/flag-1.png"
const AvailablePlayers = ({ PlayersPromise }) => {
    const PlayersData = use(PlayersPromise)
    // console.log(PlayersData);

    return (
        <div className="max-w-7xl mx-auto">
            {
                PlayersData.map(player =><div className="card bg-base-100 w-80 shadow-sm p-4">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="mt-3">
                    <div className="flex gap-2">
                        <img src={userImg} alt="" />
                        <h2 className="card-title">Shakib Al Hasan</h2>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex items-center gap-3 mt-2">
                            <img className="h-5" src={flagImg} alt="" />
                            <p>Bangladesh</p>
                        </div>
                        <button className="btn p-1">All-Rounder</button>
                    </div>
                    <hr className="text-gray-400 h-3 mt-3" />

                    <div className="flex justify-between font-bold">
                        <span>Rating</span>
                        <span>4</span>
                    </div>

                    <div className="flex justify-between mt-2">
                        <span className=" font-bold">Left-Hand-Bat</span>
                        <span className="text-gray-500">Left-Hand-Bat</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <p className="mt-1 font-bold">Price: $1500000</p>
                        <button className="btn mt-3 p-2">chose Player</button>
                    </div>
                </div>
            </div>)
            }
            
        </div>
    )
}

export default AvailablePlayers