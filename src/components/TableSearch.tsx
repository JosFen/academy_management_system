import Image from 'next/image'

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-1 text-xs rounded-full px-2 ring-[1.5px] ring-gray-300">
      <Image src="/search.png" width={15} height={15} alt="search" />
      <input
        type="text"
        placeholder="Search ..."
        className="p-2 outline-none bg-transparent w-[200px]"
      />
    </div>
  )
}

export default TableSearch
