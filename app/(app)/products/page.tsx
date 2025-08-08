import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Listing Page",
  description: "All products available on the platform",
};

export default function productsPage() {
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
