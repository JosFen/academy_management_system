import Image from 'next/image'
import Link from 'next/link'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen flex">
      {/* Dashboard{children} */}
      {/* LEFT */}
      <div className="w-[15%] md: w-[10%] lg:w-[16%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block text-sm font-bold">
            Hedgie Academy
          </span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[85%] md: w-[90%] lg:w-[84%] bg-gray-100 overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
