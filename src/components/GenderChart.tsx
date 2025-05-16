'use client'
import Image from 'next/image'
import {
  RadialBarChart,
  RadialBar,
  //   Legend,
  ResponsiveContainer
} from 'recharts'


const GenderChart = ({ boys, girls, nonbinary }: { boys: number; girls: number ; nonbinary: number}) => {
  const genderData = [
    {
      name: "Total",
      count: boys+girls+nonbinary,
      fill: "white",
    },
    {
      name: "Non-binary",
      count: nonbinary,
      fill: "rgb(255, 210, 84)",
    },
    {
      name: "Girls",
      count: girls,
      fill: 'rgba(252, 193, 234, 0.94)',
    },
    {
      name: "Boys",
      count: boys,
      fill: "#C3EBFA",
    },
  ];

  return (
      <div className="w-full h-[70%] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="100%"
            barSize={30}
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
  )
}

export default GenderChart
