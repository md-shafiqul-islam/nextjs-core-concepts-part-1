"use client";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  const isLoggedIn = true;

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address/city");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <h1>This is the services page.</h1>
      <button type="button" onClick={handleNavigation}>
        Go To City Page
      </button>
    </div>
  );
}
