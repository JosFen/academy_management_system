import { role } from '@/lib/data'
import Image from 'next/image'
import FormModal from './FormModal'
const ListManageButtons = () => {
  return (
    <div className="flex items-center gap-4 self-end">
      <button className="w-8 h-8 flex items-center justify-center border-b-2 border-gray-400 rounded-full hover:border-2 ">
        <Image src="/filter.png" width={15} height={15} alt="filter" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center border-b-2 border-gray-400 rounded-full hover:border-2">
        <Image src="/sort.png" width={15} height={15} alt="sort" />
      </button>
      
      {role === 'admin' && (
            <FormModal table="teacher" type="create" /> 
          )}
    </div>
  )
}
export default ListManageButtons
