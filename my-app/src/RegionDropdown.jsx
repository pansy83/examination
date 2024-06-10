import React, { useState } from 'react';

function RegionDropdown() {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  // 地区数据
  const regions = [
    '北京', '上海', '天津', '重庆', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江',
    '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东',
    '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '香港', '澳门', '台湾'
  ];

  return (
    <div>
      <label htmlFor="region">okk</label>
      <select id="region" value={selectedRegion} onChange={handleChange}>
        <option value="">请选择</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
}

export default RegionDropdown;

