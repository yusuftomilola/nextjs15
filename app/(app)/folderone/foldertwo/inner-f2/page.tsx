import Link from "next/link";
import React from "react";

const InnerFolderTwo = () => {
  return (
    <div>
      InnerFolderTwo
      <div>
        <Link href={"/folderfive"}>Go to Folder Five</Link>
      </div>
    </div>
  );
};

export default InnerFolderTwo;
