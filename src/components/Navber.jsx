import React from 'react'
import navImg from "../assets/logo.png"
import dollarImg from "../assets/doller-1.png"
const Navber = ({AvailableBalance}) => {
  return (
    <div>
        <div className="navbar max-w-6xl mx-auto mt-3">
  <div className="flex-1">
    <a className="text-xl">
      <img src={navImg} alt="" />
    </a>
  </div>
  <div className="flex">
    <span className="mr-2">{AvailableBalance}</span>
    <span className="mr-2">coin</span>
    <img className="w-5" src={dollarImg} alt="" />
  </div>
</div>

    </div>
  )
}

export default Navber