import React, { useState } from 'react'
import './Like.css'
import src1 from '../src/resource/左箭头.png'
import src2 from '../src/resource/喜欢.png'
function Like() {
    function handleClick1(){
        setUname('年轮')
    }
    function handleClick2(){
        setUname('执迷不悔')
    }
    function handleClick3(){
        setUname('这一生关于你的风景')
    }
    function handleClick4(){
        setUname('关键词')
    }
    function handleClick5(){
        setUname('如果爱忘了')
    }
    function handleClick6(){
        setUname('红玫瑰')
    }
    const list=[
        {
            id:1,
            title:'年轮',
            onClick:handleClick1
        },
        {
            id:2,
            title:'执迷不悔',
            onClick:handleClick2
        },
        {
            id:3,
           title:'这一生关于你的风景',
          onClick: handleClick3
        },
        {
            id:4,
          title:'关键词',
          onClick:handleClick4
        },
        {
            id:5,
        title:'如果爱忘了',
        onClick:handleClick5
    },
        {
            id:6,
            title:'红玫瑰',
            onClick:handleClick6
        }
    ]
    const [LikeList,setLikeList]=useState(list)
    const [uname,setUname]=useState('')
  return (
    <div>
        <span className='spa1'>
        <img width="60px" src={src1}/>
        <h3 className='list'>歌单</h3>
        </span>
        <span className='spa2'>
          <img width="100px" src={src2}/>
          <h2 className='likemusic'>我喜欢的音乐</h2>
        </span>
        <span className='spa3'>
        <button
         className='spa3Btn'>
            播放全部
        </button>
        </span>
        <span className='spa4'>
         {LikeList.map(item=>(
            <button
            className='like-btn' 
            key={item.id}
            onClick={item.onClick}>
                {item.id}
                {item.title}
            </button>
         ))}
        </span>
        <span className='spa5'>
         <button className='begin'>
           {`正在播放的是: ${uname}`}
         </button>
        </span>
        </div>
  )
}

export default Like