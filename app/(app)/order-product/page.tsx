"use client";
import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <div>
      <h1>Order product Page</h1>
      <button onClick={handleClick} className="cursor-pointer">
        Place Order
      </button>
    </div>
  );
}
