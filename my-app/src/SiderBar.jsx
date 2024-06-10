import React, { useState, useEffect } from 'react';
import './SiderBar.css';

import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import img1 from './resource/img1.jpg';
import src1 from '../src/resource/信息.png'
import src2 from '../src/resource/扇贝.png'
import src3 from '../src/resource/徽章.png'
import src4 from '../src/resource/idea.png'
import src5 from '../src/resource/免费.png'
import src6 from '../src/resource/云村有票.png'
import src7 from '../src/resource/商城.png'
import src8 from '../src/resource/设计大赛.png'
import src9 from '../src/resource/heartbeat.png'
import src10 from '../src/resource/音乐-收藏.png'
import src11 from  '../src/resource/彩铃.png'
import src12 from '../src/resource/向右箭头.png'


function SiderBar() {
  
    const [uname,setUname]=useState('Pansy')
    const list2=[
      {id:1,
       src:src1,
       text:'我的消息'
  
      },
      {id:2,
       src:src2,
       text:'云贝中心'
      },
      {id:3,
       src:src3,
       text:'徽章中心'
      },
      {id:4,
       src:src4,
       text:'创作者中心'
      }
    ]
    const list3=[
        {id:1,
         src:src5,
         text:'免费听歌'
        },
        {id:2,
         src:src6,
         text:'云村有票'
        },
        {id:3,
         src:src7,
         text:'商城'
        },
        {
          id:4,
          src:src8,
          text:'设计大赛'
        },
        {
          id:5,
          src:src9,
          text:'Beat专区'
        },
        {
          id:6,
          src:src10,
          text:'音乐收藏家'
        },
        {
          id:7,
          src:src11,
          text:'彩铃专区'
        }
      ]
      const [ulist,setUlist]=useState(list3)
      const [lists,setLists]=useState(list2)
      return (
    
        <div>
          <span className='span1'>
            <img className='img1' src={img1} />
          </span>
          <span 
            className='sp2'
          
            >
            {`${uname}>`}
          </span>
          <span
            className='sp3'>
            {lists.map(item=>(
              <button
                className='btn1'
                key={item.id}
                >
                <img  width="30px" src={item.src}/>   
                {item.text}
                <div style={{ textAlign: 'right' }}>
                  <img  width="20px" src={src12}/>
                </div>
              </button>
            ))}
          </span>
          <span
            className='sp4'
            >
             <h3 className='service'>音乐服务</h3>
        {ulist.map(item=>(
          <button
            className='btn1'
            key={item.id}
            >
            <img  width="30px"src={item.src}/>
            {item.text}
            <div style={{ textAlign: 'right' }}>
              <img  width="20px" src={src12}/>
            </div>
          </button>
        ))}
      </span>
    </div>


  );    
}

export default SiderBar;