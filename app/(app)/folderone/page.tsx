import Link from "next/link";

const FolderOne = () => {
  return (
    <div>
      <h1>Folder One Page</h1>
      <Link href={"/folderone/foldertwo"}>Go to Folder Two</Link>
      <Link href={"/folderthree"}>Go To Folder Three</Link>
    </div>
  );
};

export default FolderOne;
