import React, { useState } from 'react';

function BirthdaySelector({onBirthdayChange}) {
  // 定义年份、月份和日期的初始状态
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // 调用回调函数将生日更新到 Personal 组件中
    onBirthdayChange(date);
  };

  // 动态生成选项的函数
  const renderOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Year</option>
        {renderOptions(2000, 2010)}
      </select>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Month</option>
        {renderOptions(1, 12)}
      </select>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Day</option>
        {renderOptions(1, 30)}
      </select>
    </div>
  );
}

export default BirthdaySelector;
