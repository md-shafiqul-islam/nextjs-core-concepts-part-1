import Link from "next/link";
import React from "react";

export default function City() {
  return (
    <div>
      <h1>
        I am come here through multiple position. First it was /about page, then
        /about/address and after that finally here I am from
        /about/address/city.
      </h1>
      <Link href="/about">
        <button>Go Back To About Page</button>
      </Link>
    </div>
  );
}
