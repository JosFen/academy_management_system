import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { resultColHeaders} from '@/lib/data'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ListManageButtons from '@/components/ListManageButtons'
import FormModal from '@/components/FormModal'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { ITEM_PER_PAGE } from '@/lib/settings'
import { getUser } from '@/lib/auth/getUserRole'

type ResultList = {
  id: number
  title: string
  studentName: string
  studentSurname: string
  teacherName: string
  teacherSurname: string
  score: number
  className: string
  startTime: Date
}

const ResultListPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const {role, currentUserId} = await getUser();
  const isAuthrizedRole = role === 'admin';
  const resultHeaders = [...resultColHeaders, ...(isAuthrizedRole
    ? [
        {
          header: "Actions",
          key: "action",
        },
      ]
    : []),
  ];

  const { page, ...queryParams } = searchParams

  const p = page ? parseInt(page) : 1

  // URL PARAMS CONDITION

  const query: Prisma.ResultWhereInput = {}

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case 'studentId':
            query.studentId = value
            break
          case 'search':
            query.OR = [
              { exam: { title: { contains: value, mode: 'insensitive' } } },
              { student: { name: { contains: value, mode: 'insensitive' } } },
              { assignment: { title: { contains: value, mode: 'insensitive' } } }
            ]
            break
          default:
            break
        }
      }
    }
  }

  // ROLE CONDITIONS
  switch (role) {
    case "admin":
      break;
    case "teacher":
      query.OR = [
        { exam: { lesson: { teacherId: currentUserId! } } },
        { assignment: { lesson: { teacherId: currentUserId! } } },
      ];
      break;
    case "student":
      query.studentId = currentUserId!;
      break;
    case "parent":
      query.student = {
        parentId: currentUserId!,
      };
      break;
    default:
      break;
  }

  const [dataRes, count] = await prisma.$transaction([
    prisma.result.findMany({
      where: query,
      include: {
        student: { select: { name: true, surname: true } },
        exam: {
          include: {
            lesson: {
              select: {
                class: { select: { name: true } },
                teacher: { select: { name: true, surname: true } }
              }
            }
          }
        },
        assignment: {
          include: {
            lesson: {
              select: {
                class: { select: { name: true } },
                teacher: { select: { name: true, surname: true } }
              }
            }
          }
        }
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1)
    }),
    prisma.result.count({ where: query })
  ])

  const data = dataRes.map((item) => {
    const assessment = item.exam || item.assignment;

    if (!assessment) return null;

    const isExam = 'startTime' in assessment;

    return {
      id: item.id,
      title: assessment.title,
      studentName: item.student.name,
      studentSurname: item.student.surname,
      teacherName: assessment.lesson.teacher.name,
      teacherSurname: assessment.lesson.teacher.surname,
      score: item.score,
      className: assessment.lesson.class.name,
      startTime: isExam ? assessment.startTime : assessment.startDate
    }
  })


  const renderRow = (item: ResultList) => (
    <tr
      key={item.id}
      className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
    >
      <td className="flex items-center gap-4 p-3">
        <h1 className="font-semibold text-xs md:text-sm">{item.title}</h1>
      </td>

      <td className="text-xs md:text-sm">
        {item.studentName + ' ' + item.studentName}
      </td>
      <td className="text-xs md:text-sm">{item.score}</td>
      <td className="text-xs md:text-sm hidden md:table-cell">
        {item.teacherName + ' ' + item.teacherSurname}
      </td>
      <td className="text-xs md:text-sm">{item.className}</td>
      <td className="text-xs md:text-sm">
        {' '}
        {new Intl.DateTimeFormat('en-US').format(item.startTime)}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/results/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center  rounded-full bg-blue-300 text-white hover:bg-blue-500 focus:outline-none">
              <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
            </button>
          </Link>
          {isAuthrizedRole && (
            <>
              {/* <FormModal table="subject" type="update" /> */}
              <FormModal table="result" type="update" id={item.id} />
              <FormModal table="result" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  )


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP Search */}
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold hidden md:block w-full">
          Results
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <ListManageButtons />
            {isAuthrizedRole && <FormModal table="result" type="create" />}
          </div>
        </div>
      </div>

      {/* Teacher List */}
      <Table colHeaders={resultHeaders} renderRow={renderRow} data={data} />
      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  )
}
export default ResultListPage
