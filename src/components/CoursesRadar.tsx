'use client'
import Image from 'next/image'
import React, { PureComponent } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend
} from 'recharts'
import coursesRadarData from '@/lib/coursesRadarData'

const CoursesRadarChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      <div className="flex justify-between items-center">
        <h3 className="text-base text-gray-600 font-semibold">
          Courses Strength Radar
        </h3>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className=" p-1 mt-2 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="82%"
            data={coursesRadarData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="2024"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.4}
            />
            <Radar
              name="2025"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.4}
            />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: '20px', paddingBottom: '20px' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CoursesRadarChart
