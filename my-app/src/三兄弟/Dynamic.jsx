import React from 'react'
import './Dynamic.css'
import src1 from '../resource/音乐.png'
function Dynamic() {
  return (
    <div className='mic1'>
        <h3 className='mic'>
        <img  width="40px"src={src1}/>
         分享你喜欢的音乐吧
        </h3>
        <button className='mic2'>
            去分享
        </button>
        </div>
  )
}

export default Dynamic