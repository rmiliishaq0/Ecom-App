"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomButton from "./button";

export default function NavBar({children}:{children:React.ReactNode}) {
    const path = usePathname()
    const NavBarItemes = [{
        name:"Home",
        link:"/"
    }]
    const autPAges= path=="/sign-in" || path=="/sign-up"
    return (
        !autPAges && <nav className="bg-card backdrop-blur-2xl border border-white/10 rounded-full px-8 shadow-lg flex items-center p-4">
            <div className="flex justify-between items-center w-full">
                <div>
                    <Link href={"/"}>
                        <h1 className="text-lg md:text-xl font-bold text-primary ">iTolz</h1>
                    </Link>
                </div>
                <div className="flex gap-4">
                    {NavBarItemes.map((item) => (
                        <Link href={item.link} key={item.name}>
                            <CustomButton isActive={path == item.link} >
                                {item.name}
                            </CustomButton>
                        </Link>
                    ))}
                </div>
                <div className="flex gap-4 items-center justify-center">
                    {children}
                </div>
            </div>
        </nav>
    );
}