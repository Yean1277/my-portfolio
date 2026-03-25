'use client';

import { useState } from 'react';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2)); // March 2026

  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Simple calendar generation (not full implementation)
  const days = ['月', '火', '水', '木', '金', '土', '日'];

  return (
    <section className="bg-white rounded-2xl p-5 shadow-soft">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold border-l-4 border-orange-theme pl-2">
          {currentMonth.getFullYear()} {monthNames[currentMonth.getMonth()]}
        </h3>
        <div className="flex space-x-2 text-xs text-gray-400">
          <span className="cursor-pointer hover:text-orange-theme" onClick={prevMonth}>‹</span>
          <span className="cursor-pointer hover:text-orange-theme" onClick={nextMonth}>›</span>
        </div>
      </div>
      <div className="calendar-grid text-[10px] text-center mb-1 text-gray-400">
        {days.map((day, index) => (
          <div key={day} className={index === 5 ? 'text-blue-400' : index === 6 ? 'text-red-400' : ''}>
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid text-xs text-center">
        {/* Placeholder for days - in a real app, generate based on month */}
        {Array.from({ length: 31 }, (_, i) => (
          <div key={i + 1} className="p-1 hover:bg-orange-50 cursor-pointer rounded">
            {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}