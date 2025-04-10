import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role, lessonColHeaders, lessonsData } from '@/lib/data'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ListManageButtons from '@/components/ListManageButtons'
import FormModal from '@/components/FormModal'
import { Class, Lesson, Prisma, Subject, Teacher } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { ITEM_PER_PAGE } from '@/lib/settings'

type LessonList = Lesson & { subject: Subject } & { class: Class } & {
  teacher: Teacher
}

const renderRow = (item: LessonList) => (
  <tr
    key={item.id}
    className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
  >
    <td className="flex items-center gap-4 p-3">
      <h1 className="font-semibold text-xs md:text-sm">{item.subject.name}</h1>
    </td>
    <td className="text-xs md:text-sm">{item.class.name}</td>
    <td className="text-xs md:text-sm hidden md:table-cell">
      {item.teacher.name + ' ' + item.teacher.surname}
    </td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/classes/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center  rounded-full bg-blue-300 text-white hover:bg-blue-500 focus:outline-none">
            <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
          </button>
        </Link>
        {role === 'admin' && (
          <>
            {/* <FormModal table="subject" type="update" /> */}
            {/* <FormModal table="subject" type="create" /> */}
            <FormModal table="subject" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
)

const LessonListPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const { page, ...queryParams } = searchParams
  const p = page ? parseInt(page) : 1

  const query: Prisma.LessonWhereInput = {}

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case 'classId':
            query.classId = parseInt(value)
            break
          case 'teacherId':
            query.teacherId = value
            break
          case 'search':
            query.OR = [
              { subject: { name: { contains: value, mode: 'insensitive' } } },
              { teacher: { name: { contains: value, mode: 'insensitive' } } }
            ]
            break
          default:
            break
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.lesson.findMany({
      where: query,
      include: {
        subject: { select: { name: true } },
        class: { select: { name: true } },
        teacher: { select: { name: true, surname: true } }
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1)
    }),
    prisma.lesson.count({ where: query })
  ])

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP Search */}
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold hidden md:block w-full">
          List of All Lessons
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <ListManageButtons />
        </div>
      </div>

      {/* Teacher List */}
      <Table colHeaders={lessonColHeaders} renderRow={renderRow} data={data} />
      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  )
}
export default LessonListPage
