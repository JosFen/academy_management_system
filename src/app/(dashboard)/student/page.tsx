import Announcemens from '@/components/Announcements'
import { getUser } from '@/lib/auth/getUserRole'
import ScheduleCalendarContainer from '@/components/ScheduleCalendarContainer';
import { prisma } from '@/lib/prisma';

const Studentpage = async () => {
  const {currentUserId} = await getUser();
  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: currentUserId! } },
    },
  });
  
  return (
  <div className="p-4 flex gap-4 flex-col md:flex-row">
    {/* LEFT PANEL */}
    <div className="w-full lg:w-2/3 flex flex-col gap-4">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Schedule</h1>
        <ScheduleCalendarContainer type="classId" id={classItem[0].id} />
      </div>
    </div>
    {/* RIGHT PANEL */}
    <div className="w-full lg:w-1/3 flex flex-col gap-4">
      {/* <EventCalendar /> */}
      <Announcemens />
    </div>
  </div>
)}

export default Studentpage
