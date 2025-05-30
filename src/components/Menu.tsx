import menuItems from '@/lib/menuData'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
// import { role } from '@/lib/data'

const Menu = async () => {
  const user = await currentUser()
  const role = user?.publicMetadata?.role as string

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {item.title}
          </span>
          {item.items.map((subItem) => {
            if (subItem.visible.includes(role)) {
              return (
                <Link
                  href={subItem.href}
                  key={subItem.label}
                  className="flex items-center justify-center lg:justify-start gap-4 p-1.5 text-gray-500 hover:bg-blue-50 hover:text-blue-500 rounded-md"
                >
                  <Image
                    src={subItem.icon}
                    alt="menu icon"
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block">{subItem.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu
