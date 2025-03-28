import Image from 'next/image'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role, resultColHeaders, resultsData } from '@/lib/data'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ListManageButtons from '@/components/ListManageButtons'
import FormModal from '@/components/FormModal'

type Result = {
  id: number
  subject: string
  class: string
  teacher: string
  student: string
  date: string
  type: 'exam' | 'assignment'
  score: number
}

const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b border-gray-100 even:bg-slate-50 text-sm hover:bg-blue-100"
    >
      <td className="flex items-center gap-4 p-3">
        <h1 className="font-semibold text-xs md:text-sm">{item.subject}</h1>
      </td>

      <td className="text-xs md:text-sm">{item.student}</td>
      <td className="text-xs md:text-sm">{item.score}</td>
      <td className="text-xs md:text-sm hidden md:table-cell">
        {item.teacher}
      </td>
      <td className="text-xs md:text-sm">{item.class}</td>
      <td className="text-xs md:text-sm">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/results/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center  rounded-full bg-blue-300 text-white hover:bg-blue-500 focus:outline-none">
              <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
            </button>
          </Link>
          {role === 'admin' && (
            <>
              <FormModal table="subject" type="update" />
              {/* <FormModal table="subject" type="create" /> */}
              <FormModal table="subject" type="delete" id={item.id} />
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
          <ListManageButtons />
        </div>
      </div>

      {/* Teacher List */}
      <Table
        colHeaders={resultColHeaders}
        renderRow={renderRow}
        data={resultsData}
      />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}
export default ResultListPage
