// type Props = {
// params: Promise<{articleId}>
// }

// FOR CLIENT COMPONENTS - async wont work, you have to use the "use" hook from react to replace all the places where you will normally put await. e.g await(params). remove the async as it's not needed.

import Link from "next/link";

export default async function ArticlesDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "yor" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>{articleId} Article Details</h1>
      <p>Reading in language: {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=`}>English</Link>
        <Link href={`/articles/${articleId}?lang=yor`}>Yoruba</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
