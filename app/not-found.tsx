"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div>
      <h1>OOPS! Page Not Found</h1>
      <p>Could not find the requested resource {pathname}</p>
      <a href="/">Back Home</a>
    </div>
  );
}
