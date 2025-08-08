import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `${id} items for sale`,
    description: `Best ${id} product to get in Nigeria`,
  };
};

export default async function ProductDetailsPage({ params }: Props) {
  const id = (await params).productId;
  return <h1>Product {id} Details Page </h1>;
}
