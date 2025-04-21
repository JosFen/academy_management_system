'use client'

import { ITEM_PER_PAGE } from '@/lib/settings'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter()
  const hasPrev = page - 1 > 0
  const hasNext = count - ITEM_PER_PAGE * page > 0

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(window.location.search)
    params.set('page', newPage.toString())
    router.push(`${window.location.pathname}?${params}`)
  }

  return (
    <div className="flex items-center justify-center gap-2 p-4 text-gray-500 mt-4">
      <button
        disabled={!hasPrev}
        onClick={() => handlePageChange(page - 1)}
        className="py-2 px-4  rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {/* pages in between */}
      <div className="flex items-center text-sm gap-2">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1
            return (
              <button
                key={pageIndex}
                className={`py-2 px-3 rounded-md ${
                  page === pageIndex ? 'bg-blue-100' : ''
                }`}
                onClick={() => {
                  handlePageChange(pageIndex)
                }}
              >
                {pageIndex}
              </button>
            )
          }
        )}
      </div>

      <button
        disabled={!hasNext}
        onClick={() => handlePageChange(page + 1)}
        className="py-2 px-3 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination;
