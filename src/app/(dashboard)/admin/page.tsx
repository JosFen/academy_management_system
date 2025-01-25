import AttendanceChart from '@/components/AttendanceChart'
import BudgetChart from '@/components/BudgetExpenseChart'
import EventCalendar from '@/components/EventCalendar'
import GenderChart from '@/components/GenderChart'
import UserCard from '@/components/UserCard'

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[400px]">
            <GenderChart />
          </div>
          <div className="w-full lg:w-2/3 h-[400px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <BudgetChart />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  )
}

export default Adminpage
