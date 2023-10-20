import React from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className="px-5 h-14 bg-red-600 text-white flex items-center justify-between">
      <h2 className="text-2xl font-bold">Bigyan</h2>
      <div className="flex gap-4">
        <Link href="/About">About</Link>
        <Link href="/Courses">Courses</Link>
        <Link href="/Product">Product</Link>
        <pre>{props.editor}</pre>
      </div>
    </div>
  );
};

export default Header;
