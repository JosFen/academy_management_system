"use client";
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import attendanceData from '@/lib/attendanceData';

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className="flex justify-between items-center">
        <h3 className="text-base text-gray-600 font-semibold">Attendance</h3>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="95%">
        <BarChart
          width={500}
          height={300}
          data={attendanceData}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tickLine={false}  tick={{fill: '#999'}} />
          <YAxis axisLine={false} tickLine={false}  tick={{fill: '#999'}} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "#ddd"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"20px"}} />
          <Bar dataKey="present" fill="#A1EEBD" legendType='circle' activeBar={<Rectangle fill="#B1D690" />} />
          <Bar dataKey="absent" fill="#ea9797" legendType='circle' activeBar={<Rectangle fill="#FF7F3E" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart;