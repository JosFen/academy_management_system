import Announcemens from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import BudgetChart from '@/components/BudgetExpenseChart'
import CoursesRadarChart from '@/components/CoursesRadar'
import EventCalendarContainer from '@/components/EventCalendarContainer'
import GenderChartContainer from '@/components/GenderChartContainer'
import UserCard from '@/components/UserCard'

const Adminpage = ({
  searchParams
}: {
  searchParams: { [keys: string]: string | undefined }
}) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[500px]">
            <GenderChartContainer />
          </div>
          <div className="w-full lg:w-2/3 h-[500px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-2/3  h-[500px]">
            <BudgetChart />
          </div>
          <div className="w-full lg:w-1/3  h-[500px]">
            <CoursesRadarChart />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcemens />
      </div>
    </div>
  )
}

export default Adminpage
