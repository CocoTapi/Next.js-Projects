import Link from "next/link";
import Header from "./header";

export default function Home() {
  console.log("Executing...")
  return (
    <main>
      <Header />

      <div>
        {/* regular a cause reload */}
        <a href="/about">
        About Us
        </a>

        {/* no reload */}
        <Link href="/about">About Us</Link>
      </div>
    </main>
  );
}
