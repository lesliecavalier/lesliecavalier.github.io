import Logo from "@/components/Logo";
import "@/styles/globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import ResponsiveTopMenu from "@/components/ResponsiveTopMenu";

export const metadata: Metadata = {
  title: "Leslie Cavalier",
  description: "A lifestyle brand and clothing company established in 2025.",
};

export const navLinks = [
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
  return (
    <html>
      <head>
        <title>Leslie Cavalier</title>
        <meta
          name="description"
          content="A lifestyle brand and clothing company established in 2025."
        />
        <meta name="viewport" content="width=500, initial-scale=1" />
      </head>
      <body>
        <nav className="flex font-iowan px-4 py-4 items-center max-w-screen-2xl mx-auto justify-between">
          <div className="py-4 pl-1">
            <Logo width={260} />
          </div>
          <ResponsiveTopMenu />
        </nav>
        <main className="max-w-7xl mx-auto min-h-screen">{children}</main>
      </body>
    </html>
  );
}
