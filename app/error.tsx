"use client";
export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div>
      <h1>An Error Occured:</h1>
      <p>Error Name: {error.name}</p>
      <p>Error Message: {error.message}</p>
    </div>
  );
}
