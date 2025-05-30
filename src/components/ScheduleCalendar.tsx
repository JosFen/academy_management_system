'use client'

import { useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
// import { calendarEvents } from '@/lib/data'

const localizer = momentLocalizer(moment)

// const ScheduleCalendar = () => {
//   const [view, setView] = useState<View>(Views.WEEK)
//   const handleOnChangeView = (view: View) => setView(view)

//   return (
//     <Calendar
//       localizer={localizer}
//       events={calendarEvents}
//       startAccessor="start"
//       endAccessor="end"
//       views={['month', 'week', 'day']}
//       view={view}
//       style={{ height: '98%' }}
//       onView={handleOnChangeView}
//       min={new Date(2025, 1, 0, 8, 0, 0)}
//       max={new Date(2025, 1, 0, 19, 0, 0)}
//     />
//   )
// }

// export default ScheduleCalendar
const ScheduleCalendar = ({
  data
}: {
  data: { title: string; start: Date; end: Date; allDay: boolean }[]
}) => {
  const [view, setView] = useState<View>(Views.WEEK)
  const handleOnChangeView = (view: View) => setView(view)

  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={['week', 'day']}
      view={view}
      style={{ height: '98%' }}
      onView={handleOnChangeView}
      min={new Date(2025, 5, 0, 8, 0, 0)}
      max={new Date(2025, 5, 0, 19, 0, 0)}
    />
  )
}

export default ScheduleCalendar
