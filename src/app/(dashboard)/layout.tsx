import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* Dashboard{children} */}
    {/* LEFT */}
    <div className="w-[15%] md: w-[10%] lg:w-[15%] bg-red-100 p-4">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
      <Image src="/logo.png" alt="logo" width={32} height={32} />
      <span className="hidden lg:block">Hedgie</span>
      </Link>
      <Menu />
    </div>
     {/* RIGHT */}
    <div className="w-[85%] md: w-[90%] lg:w-[85%] bg-blue-100">right</div>
  </div>;
}
