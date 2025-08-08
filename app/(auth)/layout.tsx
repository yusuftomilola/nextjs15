"use client";
// import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Authentication ",
//   description: "register, login and forgot password",
// };

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <div key={link.name}>
              <div>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "font-bold bg-red-500 text-white p-1"
                      : "text-green-500"
                  }
                >
                  {link.name}
                </Link>
              </div>
            </div>
          );
        })}
        {children}
        <footer
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            padding: "1rem",
          }}
        >
          <p>Footer Section</p>
        </footer>
      </body>
    </html>
  );
}
