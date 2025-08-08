"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname);
  const url = pathname.split("/")[4];

  return (
    <div>
      <h1>OOPS! Review Not Found</h1>
      <p>Could not find the requested review page: {url}</p>
      <a href="/">Back Home</a>
    </div>
  );
}
