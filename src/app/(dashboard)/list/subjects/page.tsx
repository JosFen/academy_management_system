import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role, subjectColHeaders, subjectsData } from '@/lib/data'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

type Subject = {
  id: number
  name: string
  teachers: string[]
}

const SubjectListPage = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
    >
      <td className="flex items-center gap-4 p-3">
        <h1 className="font-semibold text-xs md:text-sm">{item.name}</h1>
      </td>
      <td className="text-xs md:text-sm">{item.teachers.join(', ')}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/parents/${item.id}`}>
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
          Subject List
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
        colHeaders={subjectColHeaders}
        renderRow={renderRow}
        data={subjectsData}
      />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}
export default SubjectListPage
