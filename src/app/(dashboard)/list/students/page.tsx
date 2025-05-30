import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { studentColHeaders } from '@/lib/data'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ListManageButtons from '@/components/ListManageButtons'
import { Class, Prisma, Student } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { ITEM_PER_PAGE } from '@/lib/settings'
import { getUser } from '@/lib/auth/getUserRole'
import FormContainer from '@/components/forms/FormContainer'

type StudentList = Student & { class: Class }

const StudentListPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const { role, currentUserId } = await getUser()
  const isAuthrizedRole = role === 'admin'
  const studentHeaders = [
    ...studentColHeaders,
    ...(isAuthrizedRole
      ? [
          {
            header: 'Actions',
            key: 'action'
          }
        ]
      : [])
  ]

  const { page, ...queryParams } = searchParams
  const p = page ? parseInt(page as string) : 1

  const query: Prisma.StudentWhereInput = {}

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case 'teacherId':
            query.class = {
              lessons: {
                some: {
                  teacherId: value
                }
              }
            }
            break
          case 'search': // search for student name
            query.name = { contains: value, mode: 'insensitive' }
            break
          default:
            break
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.student.findMany({
      where: query,
      include: {
        class: true
      },
      take: ITEM_PER_PAGE,
      skip: (p - 1) * ITEM_PER_PAGE,
      orderBy: {
        createdAt: 'desc'
      }

    }),
    prisma.student.count({ where: query })
  ])

  const renderRow = (item: StudentList) => (
    <tr
      key={item.id}
      className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
    >
      <td className="flex items-center gap-4 p-3">
        <Image
          src={item.img || '/noAvatar.png'}
          alt={item.name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.username}</td>
      <td className="hidden md:table-cell">{item.gradeId}</td>
      <td className="hidden md:table-cell">{item.class.name}</td>
      <td className="hidden xl:table-cell">{item.phone}</td>
      <td className="hidden xl:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center  rounded-full bg-blue-300 text-white hover:bg-blue-500 focus:outline-none">
              <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
            </button>
          </Link>
          {isAuthrizedRole && (
            <>
              {/* <FormContainer table="student" type="update" id={item.id} /> */}
              <FormContainer table="student" type="delete" id={item.id} />
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
          Student List
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <ListManageButtons />
            {isAuthrizedRole && <FormContainer table="student" type="create" />}
          </div>
        </div>
      </div>

      {/* Student List */}
      <Table colHeaders={studentHeaders} renderRow={renderRow} data={data} />
      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  )
}
export default StudentListPage
