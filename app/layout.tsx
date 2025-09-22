"use client";

import Logo from "@/components/Logo";
import "@/styles/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Design",
    href: "/design",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html>
      <body>
        <nav className="flex font-iowan px-4 py-4 items-center max-w-screen-2xl mx-auto">
          <div className="inline-block py-4">
            <Logo />
          </div>
          <div className="mt-16 ml-32 mx-8 flex-1">
            <ul className="flex gap-16 justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className={`text-xl ${
                      pathname === link.href ? "pb-1 border-b-2" : ""
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto min-h-screen">{children}</main>
      </body>
    </html>
  );
}
