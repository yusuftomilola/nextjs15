import { commentsData } from "../data";

type Body = {
  text: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const comment = commentsData.find((data) => data.id === parseInt(id));

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const commentIndex = commentsData.findIndex(
    (data) => data.id === parseInt(id)
  );

  const body: Body = await request.json();

  const { text } = body;

  commentsData[commentIndex].text = text;

  return Response.json(commentsData[commentIndex]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const index = commentsData.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  const deletedComment = commentsData[index];
  commentsData.splice(index, 1);

  return Response.json({
    status: true,
    message: "Comment deleted successfully",
    deletedComment,
  });
}
