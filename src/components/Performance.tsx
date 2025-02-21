'use client'

import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
import Image from 'next/image'

const data = [
  { name: 'Group A', value: 95, fill: '#82ca9d' },
  { name: 'Group B', value: 5, fill: '#8884d8' }
]

const Performance = () => {
  return (
    <div className="bg-white rounded-md p-4 h-80 relative">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Performance</h3>
        <Image src="/moreDark.png" alt="more" width={15} height={15} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.5</h1>
        <p className="text-xs text-gray-400">out of 10</p>
      </div>
      <h3 className="font-small absolute bottom-20 left-0 right-0 m-auto text-center">
        1st Term - 2nd Term
      </h3>
    </div>
  )
}

export default Performance
