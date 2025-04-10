import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role, parentColHeaders } from '@/lib/data'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ListManageButtons from '@/components/ListManageButtons'
import FormModal from '@/components/FormModal'
import { Parent, Prisma, Student } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { ITEM_PER_PAGE } from '@/lib/settings'

type ParentList = Parent & { students: Student[] }

const renderRow = (item: ParentList) => (
  <tr
    key={item.id}
    className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
  >
    <td className="flex items-center gap-4 p-3">
      {/* <Image src={item.photo} alt={item.name} width={40} height={40} className='w-10 h-10 rounded-full object-cover'/> */}
      <div className="flex flex-col">
        <h1 className="font-semibold">{item.name}</h1>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">
      {item.students.map((s) => s.name).join(', ')}
    </td>
    <td className="hidden xl:table-cell">{item.phone}</td>
    <td className="hidden xl:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/parents/${item.id}`}>
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

const ParentListPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const { page, ...queryParams } = searchParams
  const p = page ? parseInt(page as string) : 1

  const query: Prisma.ParentWhereInput = {}

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case 'search': // search for name
            query.name = { contains: value, mode: 'insensitive' }
            break
          default:
            break
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.parent.findMany({
      where: query,
      include: {
        students: true
      },
      take: ITEM_PER_PAGE,
      skip: (p - 1) * ITEM_PER_PAGE
    }),
    prisma.parent.count({ where: query })
  ])

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP Search */}
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold hidden md:block w-full">
          Parent List
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <ListManageButtons />
        </div>
      </div>

      {/* Teacher List */}
      <Table colHeaders={parentColHeaders} renderRow={renderRow} data={data} />
      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  )
}
export default ParentListPage
