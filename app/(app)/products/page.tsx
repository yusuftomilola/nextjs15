import { Metadata } from "next";
import Link from "next/link";
import { resolve } from "path";

export const metadata: Metadata = {
  title: "Product Listing Page",
  description: "All products available on the platform",
};

export default async function productsPage() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delays");
    }, 2000);
  });

  return (
    <div>
      <div>
        <Link href={"/"}>/ Home</Link>
      </div>
      <h1>Products Page</h1>
      <p>Product 1</p>
      <p>Product 2</p>
      <p>Product 3</p>
      <p>
        <Link href={"/products/4"}>Product 4</Link>
      </p>
    </div>
  );
}
