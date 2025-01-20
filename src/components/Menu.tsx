import menuItems from "@/lib/menuItems";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
      <div className="">
        {menuItems.map(item => (
          <div className="" key={item.title}>
            <span>{item.title}</span>
            {item.items.map(i => (
              <Link href={""}>
              <Image src={i.icon} alt="" width={20} height={20} />
              <span>{i.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
  )
}

export default Menu