import { NextRequest } from "next/server";
import { commentsData } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("term");
  const filteredComments = query
    ? commentsData.filter((comments) => comments.text.includes(query))
    : commentsData;

  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: commentsData.length + 1,
    text: comment.text,
  };

  commentsData.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
