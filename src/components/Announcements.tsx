import { getUser } from "@/lib/auth/getUserRole";
import { prisma } from "@/lib/prisma";
import Image from 'next/image'

const Announcements = async () => {
  const {role, currentUserId} = await getUser();
  const isAuthrizedRole = role === 'admin';

  const roleConditions = {
    teacher: { lessons: { some: { teacherId: currentUserId! } } },
    student: { students: { some: { id: currentUserId! } } },
    parent: { students: { some: { parentId: currentUserId! } } },
  };

  const whereCondition = !isAuthrizedRole
    ? {
        OR: [
          { classId: null },
          {
            class: roleConditions[role as keyof typeof roleConditions] || {},
          },
        ],
      }
    : {};

  const data = await prisma.announcement.findMany({
    orderBy: { date: "desc" },
    where: whereCondition,
  });
  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">Announcements</h2>
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
        </div>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex items-col gap-1 mt-2">
        <div className="flex flex-col gap-1 w-full">
          {data.map((announce) => (
            <div
              key={announce.id}
              className="mt-2 p-2 w-full rounded-md odd:bg-gray-100 even:bg-white"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-600">
                  {announce.title}
                </h3>
                <p className="text-gray-400 text-xs">{new Intl.DateTimeFormat("en-US").format(announce.date)}</p>
              </div>
              <p className="mt-1 text-gray-500 text-sm">
                {announce.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Announcements
