import React, { useState } from 'react'
import { useEffect,useRef } from 'react';
import BirthdaySelector from './BirthdaySelector';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import src1 from '../src/resource/左箭头.png'
import src2 from '../src/resource/img1.jpg'
import src3 from '../src/resource/向右箭头.png'
import src4 from '../src/resource/取消.png'
import './Personal.css'
import RegionDropdown from './RegionDropdown';
function Personal() {

  const [gender,setGender]=useState('女')
  const [nickName,setNickName]=useState('Pansy')
  const nicknameInputRef = useRef(null); // 创建一个引用来引用输入框
  const [birthDay,]=useState('2005-06-01')
  const [region,]=useState('重庆')
  const [introduction,]=useState('喜欢老歌的00后女孩')
  
  function handleGenderClick(){
    setShowGenderMenu(!showGenderMenu); 
    // 切换性别菜单的显示状态
    if (!showGenderMenu) {
      document.body.classList.add('dark-overlay'); // 添加暗色背景类
    } else {
      document.body.classList.remove('dark-overlay'); // 移除暗色背景类
    }
  }
  const list=[
    {id:1,
      text:'昵称',
      default:nickName,
      onClick: handleNicknameClick ,
    },
    {id:2,
      text:'性别',
      default:gender,
      onClick: handleGenderClick 
    },
    {
      id:3,
      text:'二维码',
    },
    {
      id:4,
      default:birthDay,
      text:'生日',
      onClick: handleBirthdayClick 
    },
    {
      id:5,
      text:'地区',
      default:region,
      onClick: handleRegionClick 
    },
    {
      id:6,
      text:'大学'
    },
    {
      id:7,
      text:'音乐标签'
    },
    {
      id:8,
      text:'简介',
      default:introduction,
      onClick: handleBioClick 
    },
    {
      id:9,
      text:'个人主页隐私设置'
    }
  ]
  const [birthday, setBirthday] = useState(null);

  const handleBirthdayChange = (newBirthday) => {
    setBirthday(newBirthday);
  };
  const [list3,setList3]=useState(list)
  const [a1Src,setA1Src]=useState(src2)
  const [showGenderMenu,setShowGenderMenu]=useState(false)
  const [showNickMenu,setShowNickMenu]=useState(false)
  const [showBirthdaySelector, setShowBirthdaySelector] = useState(false);
  const [showRegion,setShowRegion]=useState(false)
  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        setA1Src(e.target.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};
  // 处理输入框中的昵称变化
  const handleNicknameChange = (event) => {
    
    setNickName(event.target.value);
     console.log("123")
  };
function handleNicknameClick(){
  setShowNickMenu(!showNickMenu); 
  // 切换性别菜单的显示状态
  if (!showNickMenu) {
    document.body.classList.add('dark-overlay'); // 添加暗色背景类
  } else {
    document.body.classList.remove('dark-overlay'); // 移除暗色背景类
  }
}
  // 处理输入框失去焦点时的逻辑
  const handleNicknameBlur = () => {
    setShowNickMenu(false); // 隐藏昵称输入框
  };

const  handleBoy=()=>{
  setGender('男');
  console.log('nan')
}
const  handleGirl=()=>{
  setGender('女');
  console.log('nv')
}
function handleBirthdayClick(){
  setShowBirthdaySelector(true)
}
function handleRegionClick(){
  setShowRegion(true)
}
function handleBioClick(){
  console.log("820")
}
  return (
    <div>
      <span className='span1'>
      <p><img width="50px" src={src1}/></p>
        <h4>hello</h4>
        </span>
        <span className='span2'>
        <img  className='a1'src={a1Src}/>
       
        </span>
        <span className='birthday'>
        {showBirthdaySelector
         && <BirthdaySelector
         onBirthdayChange={handleBirthdayChange}
         />}
        </span>
        <span className='region'>
        {showRegion 
         && <RegionDropdown/>}
        </span>
        {showGenderMenu && (
                  <div className="gender-menu">
                    <button 
                    className="gender-option" 
                    onClick={handleBoy}
                    >男</button>
                    <button
                     className="gender-option"
                     onClick={handleGirl}
                     >女</button>
                    <button 
                    className='menu-btn'
                    onClick={handleGenderClick}>
                      <img width="20px"src={src4}/>
                    </button>
                  </div>
                )}
                    {showNickMenu && (
                  <div className="nick-menu">
                  <input
                  className='nick-input' 
                  onChange={handleNicknameChange}
                 onBlur={handleNicknameBlur}
               
                  type="text" />
                  </div>
                )}
        <input
                id="upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleChange}    
            />
            <label  htmlFor="upload" className="btn2">更换</label>
        <span className='span3'>
         {list3.map(item=>(
          <span key={item.id}>
          <button 
          className='btn4'
          onClick={item.onClick}
          >{item.text}
          <div className='default' >{item.default}</div>
          <div style={{ textAlign: 'right' }}>
                 <img
                  
                   width="20px" src={src3}/>
             </div>    
          </button>
          </span>
         ))}               
        </span>
      </div>
  )
}

export default Personal