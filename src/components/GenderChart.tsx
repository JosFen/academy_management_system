'use client'
import Image from 'next/image'
import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  //   Legend,
  ResponsiveContainer
} from 'recharts'
import genderData from '@/lib/genderData'

const GenderChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4">
      {/* CHART TITLE */}
      <div className="flex justify-between items-center">
        <h3 className="text-base text-gray-600 font-semibold">
          Students Gender Distribution
        </h3>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-[70%] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={20}
            data={genderData}
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="count"
            />
            {/* <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/boyGirl.png"
          alt="boyGirl"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
        />
      </div>
      {/* CHART LEGEND */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blue-200 rounded-full" />
          <h1 className="font-bold font-serif">1,200</h1>
          <h2 className="text-xs text-gray-500">Boys (60%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-pink-200 rounded-full" />
          <h1 className="font-bold font-serif">800</h1>
          <h2 className="text-xs text-gray-500">Girls (40%)</h2>
        </div>
      </div>
    </div>
  )
}

export default GenderChart
