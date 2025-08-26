"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  if (!pathName.includes("dashboard")) {
    return (
      <nav>
        <div className="bg-green-600">
          <ul className="flex justify-around">
            <Link href="/">
              <li>Home</li>
            </Link>

            <Link href="/about">
              <li>About</li>
            </Link>

            <Link href="/services">
              <li>Services</li>
            </Link>

            <Link href="/posts">
              <li>Posts</li>
            </Link>

            <Link href="/docs">
              <li>Docs</li>
            </Link>

            <Link href="/shop">
              <li>Shop</li>
            </Link>

            <Link href="/login">
              <li>Login</li>
            </Link>

            <Link href="/user-dashboard">
              <li>Dashboards</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
}
