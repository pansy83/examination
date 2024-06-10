import React from 'react'
import { useState } from 'react'
import './Special.css'
import src1 from '../src/resource/img1.jpg'
import Music from './三兄弟/Music'
import PodCast from './三兄弟/PodCast'
import Dynamic from './三兄弟/Dynamic'

function Special() {
    
    const [selectedTab, setSelectedTab] = useState('music');

    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };
  
    // 根据当前选中的选项渲染对应的组件
    let content;
    switch (selectedTab) {
      case 'music':
        content = <Music />;
        break;
      case 'podcast':
        content = <PodCast />;
        break;
      case 'dynamic':
        content = <Dynamic />;
        break;
      default:
        content = <div>Invalid Tab</div>;
    }
  return (
    <div className='special'>
        <span className='pan1'>
            <img  className='src1' src={src1}/>
        </span>
      <span className='pan2'>
            <button
           
             >编辑资料</button>
      </span>
      <span className='pan3'>
        <button 
        className='music'
        onClick={() => handleTabClick('music')}
        >
            音乐
            </button>
        <button 
        className='podcast'
        onClick={() => handleTabClick('podcast')}>
            播客
            </button>
        <button 
        className='dynamic'
        onClick={() => handleTabClick('dynamic')}>
            动态
            </button>
      </span>
      <span className='pan4'>
         {content}
      </span>
        </div>
  )
}

export default Special