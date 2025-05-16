
import Image from 'next/image'
import React from 'react'
import GenderChart from './GenderChart'
import { prisma } from '@/lib/prisma'

const GenderChartContainer = async () => {
  const data = await prisma.student.groupBy({
    by: ['sex'],
    _count: true,
  });
  // console.log(data);

  const boys = data.find((i) => i.sex === 'MALE')?._count || 0;
  const girls = data.find((i) => i.sex === 'FEMALE')?._count || 0;
  const nonbinary = data.find((i) => i.sex === 'OTHER')?._count || 0;
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
      <GenderChart boys={boys} girls={girls} nonbinary={nonbinary} /> 
      {/* CHART LEGEND */}
        <div className="flex justify-center gap-6">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-pink-200 rounded-full" />
          <h1 className="font-bold font-serif">{girls}</h1>
          <h2 className="text-xs text-gray-500">Girls ({Math.round((girls / (boys + girls)) * 100)}%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blue-200 rounded-full" />
          <h1 className="font-bold font-serif">{boys}</h1>
          <h2 className="text-xs text-gray-500">Boys ({Math.round((boys / (boys + girls)) * 100)}%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-orange-200 rounded-full" />
          <h1 className="font-bold font-serif">{nonbinary}</h1>
          <h2 className="text-xs text-gray-500">Nonbinary ({Math.round((nonbinary / (boys + girls)) * 100)}%)</h2>
        </div>
      </div>
    </div>
  )
}

export default GenderChartContainer
