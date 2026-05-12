"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon ,Sun,Menu,X} from "lucide-react";
import { useTheme } from "next-themes";
import { useState,useEffect } from "react";
import { cn } from "@/lib/utils";

export default function NavBar({children}:{children:React.ReactNode}) {
    const path = usePathname()
    const { theme ,setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#", label: "Pricing" },
        { href: "#", label: "About" },
        { href: "#", label: "Contact" },
    ];

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };


    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        // !autPAges && <nav className="bg-card backdrop-blur-2xl shadow-lg  ring-1 ring-foreground/10 rounded-full md:px-8 px-6 flex items-center md:p-4 p-2">
        //     <div className="flex justify-between items-center w-full">
        //         <div>
        //             <Link href={"/"}>
        //                 <h1 className="text-lg md:text-xl font-bold text-primary ">iTolz</h1>
        //             </Link>
        //         </div>
        //         <div className="flex md:gap-4 gap-2">
        //             {NavBarItemes.map((item) => (
        //                 <Link href={item.link} key={item.name}>
        //                     <CustomButton isActive={path == item.link} >
        //                         {item.name}
        //                     </CustomButton>
        //                 </Link>
        //             ))}
        //         </div>
        //         <div className="flex md:gap-4 gap-2 items-center justify-center">
        //             <div>
        //             {theme === "dark" ? (
        //                 <Sun className="md:h-5 md:w-5 h-4 w-4 cursor-pointer transition hover:opacity-85" onClick={() => setTheme("light")} />
        //             ) : (
        //                 <Moon className="md:h-5 md:w-5 h-4 w-4 cursor-pointer transition hover:opacity-85" onClick={() => setTheme("dark")} />
        //             )}

        //             </div>
        //             {children}
        //         </div>
        //     </div>
        // </nav>
        <header className="bg-card backdrop-blur-sm   z-50 w-full shadow-lg rounded-3xl ring-1 ring-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold text-primary">iTolz</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className={cn("text-sm font-medium text-gray-500 dark:text-gray-300 dark:hover:text-primary hover:text-primary transition",path === link.href && "text-primary!")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             {children}
            <button
              onClick={toggleTheme}
              className=" cursor-pointer p-2 rounded-3xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn("text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition",path === link.href && "text-primary!")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
    );
}
