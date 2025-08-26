import Link from "next/link";

export default function Address() {
  return (
    <div>
      <h1>This is address page under the about route.</h1>
      <Link href="/about/address/city">
        <button>Go To City Page</button>
      </Link>
    </div>
  );
}
