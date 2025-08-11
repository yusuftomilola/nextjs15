"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl text-red-500">Oops!!! An error occured</h1>
    </div>
  );
}
