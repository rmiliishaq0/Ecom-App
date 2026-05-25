import Link from "next/link";
import { footerLinks } from "@/utils/constants" ;
import { socialIcons } from "@/utils/constants";
import { Card } from "./ui/card";
import { Stagger } from "./stagger";
import { StaggerItem } from "./stagger-item";


export default function Footer() {
  return (    
  <Stagger>
    <Card>
    <footer className="pt-4 md:pt-6 font-inter relative overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-6 flex items-center justify-center">
          {/** logo Here  */}
          <Link href={"/"} className="text-gray-900 dark:text-white text-3xl font-extrabold tracking-wide">
            iTolz
          </Link>
        </div>

        <nav className="mb-6 w-full">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-base font-medium px-4">
            {footerLinks.map((link) => (
              <StaggerItem key={link.name}>
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
              </StaggerItem>
            ))}
          </ul>
        </nav>

        <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
          {socialIcons.map((i) => (
            <StaggerItem key={i.name}>
            <Link
              key={i.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={i.name}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href={i.href}
            >
              <i.icon className="size-6 transition-transform duration-200 hover:scale-110"/>
            </Link>
            </StaggerItem>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} iTolz. All rights reserved.
        </p>
      </div>
    </footer>
    </Card>
    </Stagger>
  );
}

