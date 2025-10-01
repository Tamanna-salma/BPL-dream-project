import React from 'react'

const SelectCard = ({player,removePlayer}) => {
    console.log(player);
const hendleClick =()=>{
    removePlayer(player)

}
  return (
    <div>
         <div className='border border-gray-200 flex justify-between items-center p-2 rounded-xl mt-2'>
        <div className='flex items-center gap-3 '>
         <img src={player.img} className='w-16 h-16 rounded-xl' alt="" />
         <div>
          <h2 className='text-xl  font-bold'>{player.name}</h2>
         <p className='text-sm'>{player.role}</p>
         </div>
        </div>
        <div onClick={hendleClick}>
          <img src="https://i.ibb.co.com/r8z0rB4/Frame.png" />
        </div>

      </div>
    </div>
  )
}

export default SelectCard