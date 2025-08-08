import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Docs",
  },
};

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  console.log(slug);

  return <h1>Docs page</h1>;
};

export default page;
