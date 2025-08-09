import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <h1>Home</h1>
      <Link href={"/products"}>Products</Link>
      <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
      <Link href={"/articles/breaking-news-456?lang=yor"}>Read in Yoruba</Link>
    </>
  );
}
