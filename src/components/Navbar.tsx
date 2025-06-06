import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'

const Navbar = async () => {
  const user = await currentUser()

  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH INPUT */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={15} height={15} />
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* USER Panel */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
            3
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leeding-3 font-medium">Micchi</span>
          <span className="text-[8px] text-gray-500 text-right">
            {user?.publicMetadata?.role as string}
          </span>
        </div>
        {/* <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        /> */}
        <UserButton /> {/* Clerk User Button */}
      </div>
    </div>
  )
}

export default Navbar
