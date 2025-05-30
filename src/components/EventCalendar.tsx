// 'use client'
// import eventsData from '@/lib/eventsData'
// import { useState } from 'react'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import Image from 'next/image'

// type ValuePiece = Date | null
// type Value = ValuePiece | [ValuePiece, ValuePiece]

// const EventCalendar = () => {
//   const [value, onChange] = useState<Value>(new Date())

//   return (
//     <div className="bg-white p-3 rounded-xl">
//       <Calendar onChange={onChange} value={value} />
//       <div className="flex items-cener justify-between">
//         <div className="flex items-center gap-2">
//           <h2 className="text-lg font-semibold my-4">Events</h2>
//           <Image src="/calendar.png" alt="calendar" width={15} height={15} />
//         </div>
//         <div className="flex items-center gap-4">
//           <Image src="/moreDark.png" alt="more" width={20} height={20} />
//         </div>
//       </div>
//       <div className="flex flex-col gap-1">
//         {eventsData.map((event) => (
//           <div
//             key={event.id}
//             className="p-2 rounded-lg border-t-2 odd:border-t-blue-100 even:border-t-pink-100"
//           >
//             {/* <div className="flex items-center justify-between"> */}
//             <h3 className="font-bold text-gray-600">{event.title}</h3>
//             <p className="text-gray-400 text-xs">{event.time}</p>
//             {/* </div> */}
//             <p className="mt-1 text-gray-500 text-sm">{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default EventCalendar

'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date())

  const router = useRouter()

  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value}`)
    }
  }, [value, router])

  return <Calendar onChange={onChange} value={value} />
}

export default EventCalendar
