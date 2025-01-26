'use client'
import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import Image from 'next/image'
import budgetData from '@/lib/budgetData'

const BudgetChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      <div className="flex justify-between items-center">
        <h3 className="text-base text-gray-600 font-semibold">
          Budget vs Expense
        </h3>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="95%">
        <LineChart
          width={500}
          height={300}
          data={budgetData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#999' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#999' }}
            tickMargin={10}
          />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: '#ddd' }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '10px', paddingBottom: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="budget"
            stroke="#81BFDA"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ea9797"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BudgetChart
