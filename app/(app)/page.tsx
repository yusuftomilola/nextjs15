import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <h1>Home</h1>
      <Link href={"/products"}>Products</Link>
    </>
  );
}
