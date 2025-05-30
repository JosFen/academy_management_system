import { prisma } from '@/lib/prisma'
import ScheduleCalendar from './ScheduleCalendar'
import { toCurrentWeekSchedule } from '@/lib/helperFunctions'

const ScheduleCalendarContainer = async ({
  type,
  id
}: {
  type: 'teacherId' | 'classId'
  id: string | number
}) => {
  const lessonsData = await prisma.lesson.findMany({
    where: {
      ...(type === 'teacherId'
        ? { teacherId: id as string }
        : { classId: id as number })
    }
  })

  const lessonScheduleData = lessonsData.map((lesson) => ({
    title: lesson.name,
    start: lesson.startTime,
    end: lesson.endTime,
    allDay: false
  }))

  const schedule = toCurrentWeekSchedule(lessonScheduleData)

  return (
    <div className="">
      <ScheduleCalendar data={schedule} />
    </div>
  )
}

export default ScheduleCalendarContainer
