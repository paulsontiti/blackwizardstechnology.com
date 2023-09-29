import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/register"}>Register</Link>
      <Link href={"/login"}>Login</Link>
    </main>
  );
}
