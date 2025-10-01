import React from 'react'
import SelectCard from './SelectCard'

const Selected = ({purchedPlayer,removePlayer}) => {

  return (
    <div className='max-w-6xl mx-auto mt-5'>
    {
      purchedPlayer.map(player=> <SelectCard removePlayer={removePlayer} player={player}></SelectCard>)
    }
     
    </div>
  )
}

export default Selected