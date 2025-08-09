import Link from "next/link";
import React from "react";

const FolderTwo = () => {
  return (
    <div>
      FolderTwo <Link href={"/folderfour"}>Go To Folder Four</Link>
    </div>
  );
};

export default FolderTwo;
