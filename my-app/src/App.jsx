import React from 'react';
import './App.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import src1 from '../src/resource/索引.png'
import src2 from '../src/resource/听歌.png'
import src3 from '../src/resource/播放3.png'
import SiderBar from './SiderBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Special from './Special';

function App() {

    
     const  [data, setData] = useState(null);
 
  const list=[
      {id:1,
        src:'https://tse2-mm.cn.bing.net/th/id/OIP-C.IBh4dFxew-191MAeDp2WGQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      },
      {id:2,
        src:'https://tse1-mm.cn.bing.net/th/id/OIP-C.mnWUzxXxqhvfxvomg6HuugHaHa?w=185&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      },
      {id:3,
        src:'https://tse1-mm.cn.bing.net/th/id/OIP-C.E0Z3pgja09IqRC54bJAbyAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      }
  ]

  const [list1,setList1]=useState(list)
  const [sidebarOpen, setSidebarOpen] = useState(false);
   let touchStartX = 0;
  let touchEndX = 0;
  const toggleSidebar = () => {

    setSidebarOpen(!sidebarOpen);
  };
  //从右到左划动触发滑入侧边栏
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
    //条件判断
    if (touchEndX - touchStartX >50) { 
      setSidebarOpen(true);
    }
  };
  //从左到右划动触发滑出侧边栏
  const handleTouchStart2 = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove2=(e)=>{
    touchEndX = e.touches[0].clientX;
    //条件判断
    if (touchStartX - touchEndX > 50) { 
      setSidebarOpen(false);
    }
  }
  
   // 网络请求的逻辑
// useEffect(() => {
//   const fetchData = async () => {
//     try {
      
//       const reply = await axios.get('http://www.codeman.ink/api/personalized?limit=15');
      
//       setData(reply.data);
//     } catch (error) {
     
//       console.error('Error fetching data:', error);
//     }
//   };
//   // 调用 fetchData 函数来获取数据
//   fetchData();
// }, []);
 // 空数组作为第二个参数，useEffect只在组件挂载时执行一次
 //直接请求数据 渲染列表报错 (说没有找到result)
 //我决定自己弄个列表(实在没得办法了)
   const dataList=[
    {
      id:1,
      playCount:69368016,
      picUrl:"https://p2.music.126.net/ijqYBSkbFywbuKagW7EXEg==/109951168991559832.jpg"
    },
    {
      id:2,
      playCount:72909216,
      picUrl:"https://p2.music.126.net/uXbDB1aWsp36_I_lQs-DeA==/1411772930113118.jpg"
    },
    {
      id:3,
      playCount:139097728,
      picUrl:"https://p2.music.126.net/RWam_W9XlA7_698IFdVg5Q==/109951168923832792.jpg"
    },
    {
      id:4,
      playCount:34286196,
      picUrl:"https://p2.music.126.net/RKDx0K4qLB_GIp-oJzRMeQ==/109951165475828213.jpg"
    },
    {
      id:5,
      playCount:50419456,
      picUrl:"https://p2.music.126.net/TIIBNztL_pmitO7cbGunvg==/18519074348678474.jpg"
    },
    {id:6,
    playCount:27116126,
    picUrl:"https://p2.music.126.net/zpmOTZw533nltCQJtXC8Rg==/109951168215962168.jpg"
    },
    {
      id:7,
      playCount:29177870,
    picUrl:"https://p2.music.126.net/8g2Pn9Xw1m7cFhxOlc3BMg==/109951167875709379.jpg"
    },
    {
      id:8,
      playCount:54621124,
    picUrl:"https://p2.music.126.net/psth_fcCEKjDVXRtijL_DQ==/1383185632930533.jpg"
    },
    {
      id:9,
      playCount:27638072,
    picUrl:"https://p1.music.126.net/c-u3kOlkVTUf4JdeDHDdEw==/109951163291871252.jpg"
    },
    {
      id:10,
      playCount: 41420360,
    picUrl:"https://p2.music.126.net/dMlINUxUskjYg30JTRYexw==/19221662277102979.jpg"
    },
    {
      id:11,
      playCount:26700822,
    picUrl:"https://p2.music.126.net/6wq2s3Rtm8aJYvAoHKmgyA==/109951163202408350.jpg"
    },
    {
      id:12,
      playCount:40336320,
    picUrl:"https://p2.music.126.net/t97_FTCUQsFJrh-gSE33_g==/109951167665585892.jpg"
    },
    {
      id:13,
      playCount:27632732,
    picUrl:"https://p2.music.126.net/jrrexbEDtAZepzYYVXMA6w==/109951163138024517.jpg"
    },
    {
      id:14,
      playCount:42902112,
      picUrl:"https://p2.music.126.net/qW_tkvmFJCOfFJuEgWsYyA==/109951162992442802.jpg"
    },
    {
      id:15,
      playCount:75980840,
    picUrl:"https://p2.music.126.net/vZ5ef3WzRneTTydXSzPauQ==/109951165994871935.jpg"
    },
    {
      id:16,
      playCount:32809016,
      picUrl:"https://p1.music.126.net/7yf2kfPh7wlMGC-d-3AEsw==/109951163309396149.jpg"
    }
   ]
   const [list2,setList2]=useState(dataList)
  return (
   
   <div className="app"
   onTouchStart={handleTouchStart}
   onTouchMove={handleTouchMove}>
       {sidebarOpen && <div
        className="sidebar"
        onTouchStart={handleTouchStart2}
        onTouchMove={handleTouchMove2}
        >
      <SiderBar/>
    </div>}
      <div
       className={`main ${sidebarOpen ? 'sidebar-open' : ''}`}
      >
          <span className='span1'>
      <img
       onClick={toggleSidebar} 
      className='img3' width="40px"src={src1}/>
      <h3
      className='hello'
      >你好</h3>
     
      <h4>Pansy83</h4>
      </span>
      <span className='span2'>
        {list1.map((item)=>(
          <li 
          key={item.id}>
              <img 
              className='img2'
          src={item.src}/></li>
        ))}
      </span>
      <h3 className='like'>推荐歌单</h3>
      <span className='span3'>
    
      </span>
      <span className='span4'>
     {list2.map((item)=>(
          <span
           className='span5'
           key={item.id}>
            
         <img
         className='pic'  
         width="100px"
         src={item.picUrl}
         />
         <img className='src3'src={src3}/>
        <img
        className='src2' 
        src={src2} width="20px"/>
         <p >{item.playCount}</p>
          </span>
     ))}
      </span>
      </div>
      
      </div>
    
  )
 
}
export default App
