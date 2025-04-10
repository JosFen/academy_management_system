'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const TableSearch = () => {
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // prevent default page refresh
    const value = (e.currentTarget[0] as HTMLInputElement).value.trim()
    const params = new URLSearchParams(window.location.search)

    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
      e.currentTarget.reset() // reset the form input
    }
    router.push(`${window.location.pathname}?${params}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full md:w-auto flex items-center gap-1 text-xs rounded-full px-2 ring-[1.5px] ring-gray-300"
    >
      <Image src="/search.png" width={15} height={15} alt="search" />
      <input
        type="text"
        placeholder="Search name..."
        className="p-2 outline-none bg-transparent w-[200px]"
      />
    </form>
  )
}

export default TableSearch
