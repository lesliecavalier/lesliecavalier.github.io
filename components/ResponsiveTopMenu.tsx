import Link from "next/link";
import { navLinks } from "@/app/layout";
import HamburgerMenu from "@/components/HamburgerMenu";

function ResponsiveTopMenu() {
  return (
    <>
      <div className="md:hidden">
        <div role="button" title="Menu" className="cursor-pointer p-3 w-[80px]">
          <HamburgerMenu width={85} height={30} />
        </div>
      </div>
      <div className="mt-16 ml-32 mx-8 flex-1 hidden md:block">
        <ul className="flex gap-16 justify-end">
          {navLinks.map((link: { href: string; label: string }) => (
            <li key={link.href}>
              <Link className={`text-xl`} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ResponsiveTopMenu;
