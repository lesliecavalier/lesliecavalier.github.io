"use client";
import Link from "next/link";
import { navLinks } from "@/app/layout";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useState } from "react";
import iowan from "@/components/font/iowan";

function ResponsiveTopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <div
          role="button"
          title="Menu"
          className="cursor-pointer p-3 w-[80px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div className="text-4xl px-4">X</div>
          ) : (
            <HamburgerMenu width={85} height={30} />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "bg-white block fixed top-[156px] left-0 right-0 p-4 border-b"
            : "hidden mt-16 ml-32 mx-8 flex-1"
        } md:block`}
      >
        <ul
          className={
            isOpen ? "justify-start leading-7" : "flex gap-16 justify-end"
          }
        >
          {navLinks.map((link: { href: string; label: string }) => (
            <li
              key={link.href}
              className={isOpen ? "mb-6 ml-2" : "mb-0"}
              onClick={() => setIsOpen(false)}
            >
              <Link
                className={`text-xl ${isOpen ? "text-right" : "text-left"}`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {isOpen && (
            <li className={`mb-6 ml-2 ${iowan.className}`}>
              lesliecavalierinbox@gmail.com
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default ResponsiveTopMenu;
