import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>This is the about page.</h1>
      <Link href="/about/address">
        <button>Go To Address Page</button>
      </Link>
    </div>
  );
}
