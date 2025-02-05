import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role, teacherColHeaders, teachersData } from '@/lib/data'
import { it } from 'node:test'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

type Teacher = {
  id: number
  teacherId: string
  name: string
  email?: string
  photo: string
  phone: string
  subjects: string[]
  classes: string[]
  address: string
}

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
    >
      <td className="flex items-center gap-4 p-3">
        <Image
          src={item.photo}
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
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(', ')}</td>
      <td className="hidden md:table-cell">{item.classes.join(', ')}</td>
      <td className="hidden xl:table-cell">{item.phone}</td>
      <td className="hidden xl:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center  rounded-full bg-blue-300 text-white hover:bg-blue-500 focus:outline-none">
              <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
            </button>
          </Link>
          {role === 'admin' && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-400 text-white hover:bg-red-600 focus:outline-none">
              <FontAwesomeIcon icon={faTrashAlt} className="w-4 h-4" />
            </button>
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
          Teacher List
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full">
              <Image src="/filter.png" width={15} height={15} alt="filter" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full">
              <Image src="/sort.png" width={15} height={15} alt="sort" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full">
              <Image src="/plus.png" width={15} height={15} alt="plus" />
            </button>
          </div>
        </div>
      </div>

      {/* Teacher List */}
      <Table
        colHeaders={teacherColHeaders}
        renderRow={renderRow}
        data={teachersData}
      />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}
export default TeacherListPage
