import Image from 'next/image'

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-4 text-gray-500 mt-4">
      <button
        disabled
        className="py-2 px-4  rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center text-sm gap-2">
        <button className="py-2 px-3 rounded-md bg-blue-100">1</button>
        <button className="py-2 px-3 rounded-md ">2</button>
        ...
        <button className="py-2 px-3 rounded-md ">9</button>
      </div>
      <button className="py-2 px-3 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  )
}

export default Pagination
