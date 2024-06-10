import React, { useState } from 'react'
import src1 from '../resource/喜欢.png'
import src2 from '../resource/排行.png'
import src3 from '../resource/新建歌单.png'
import './Music.css'
function Music() {
    const list =[
        {
            id:1,
            imgSrc:src1,
            text:'我喜欢的音乐'
        },
        {
            id:2,
            imgSrc:src2,
            text:'听歌排行'
        },
        {
            id:3,
            imgSrc:src3,
            text:'新建歌单'
        }
    ]
    const [MusicList,setMusicList]=useState(list)
  return (
    <div className='music'>
       {MusicList.map((item)=>(
        <span className='pan'
         key={item.id}>
            <img width="80px"src={item.imgSrc}/>
            <h3 className='text'
            >{item.text}</h3>
            
        </span>
       ))}
    </div>
  )
}

export default Music