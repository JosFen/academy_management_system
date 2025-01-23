import Image from 'next/image'

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-green-200 even:bg-purple-200 flex-1 p-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-indigo-600">
          2024/2025
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-xl font-serif font-semibold my-4">3,123</h1>
      <h1 className="capitalize text-sm font-medium text-gray-500">{type}s</h1>
    </div>
  )
}

export default UserCard
