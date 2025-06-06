import Announcemens from '@/components/Announcements'
import EventCalendar from '@/components/EventCalendar'
import ScheduleCalendar from '@/components/ScheduleCalendar'

const Parentpage = () => (
  <div className="flex-1 p-4 flex gap-4 flex-col md:flex-row">
    {/* LEFT PANEL */}
    <div className="w-full lg:w-2/3 flex flex-col gap-4">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Schedule (Kid 1: Jolin K)</h1>
        <ScheduleCalendar />
      </div>
    </div>
    {/* RIGHT PANEL */}
    <div className="w-full lg:w-1/3 flex flex-col gap-4">
      {/* <EventCalendar /> */}
      <Announcemens />
    </div>
  </div>
)

export default Parentpage
