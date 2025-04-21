import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { classColHeaders} from '@/lib/data'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ListManageButtons from '@/components/ListManageButtons'
import FormModal from '@/components/FormModal'
import { Class, Prisma, Teacher } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { ITEM_PER_PAGE } from '@/lib/settings'
import { getUser } from '@/lib/auth/getUserRole'

type ClassList = Class & { supervisor: Teacher }


const ClassListPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const {role, currentUserId} = await getUser();
  const isAuthrizedRole = role === 'admin';

  const classHeaders = [...classColHeaders, ...(isAuthrizedRole
    ? [
        {
          header: "Actions",
          key: "action",
        },
      ]
    : []),
  ];

  const { page, ...queryParams } = searchParams
  const p = page ? parseInt(page as string) : 1
  // URL PARAMS CONDITION
  const query: Prisma.ClassWhereInput = {}

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case 'supervisorId':
            query.supervisorId = value
            break
          case 'search':
            query.name = { contains: value, mode: 'insensitive' }
            break
          default:
            break
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.class.findMany({
      where: query,
      include: {
        supervisor: true
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1)
    }),
    prisma.class.count({ where: query })
  ])


  const renderRow = (item: ClassList) => (
    <tr
      key={item.id}
      className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
    >
      <td className="flex items-center gap-4 p-3">
        <h1 className="font-semibold text-xs md:text-sm">{item.name}</h1>
      </td>
      <td className="text-xs md:text-sm">{item.capacity}</td>
      <td className="text-xs md:text-sm">{item.gradeId}</td>
      <td className="text-xs md:text-sm hidden md:table-cell">
        {item.supervisor.name + ' ' + item.supervisor.surname}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/classes/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center  rounded-full bg-blue-300 text-white hover:bg-blue-500 focus:outline-none">
              <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
            </button>
          </Link>
          {isAuthrizedRole && (
            <>
              <FormModal table="class" type="update" id={item.id} />
              <FormModal table="class" type="delete" id={item.id} />
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
          List of All Classes
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <ListManageButtons />
            {isAuthrizedRole && <FormModal table="class" type="create" />}
          </div>
        </div>
      </div>

      {/* Teacher List */}
      <Table colHeaders={classHeaders} renderRow={renderRow} data={data} />
      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  )
}
export default ClassListPage
