import { notFound } from "next/navigation";

const ReviewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ reviewsId: string; productId: string }>;
}) => {
  const { reviewsId, productId } = await params;
  if (parseInt(reviewsId) > 100) {
    notFound();
  }
  return (
    <h1>
      Reviews Details Page {reviewsId} for Product {productId}
    </h1>
  );
};

export default ReviewsDetailsPage;
