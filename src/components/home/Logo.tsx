"use client";
import { useRouter } from "next/navigation";
import BlackImage from "../image/BlackImage";

export default function Logo() {
  const router = useRouter();
  return (
    <BlackImage
      src="/assets/logo.jpg"
      width={70}
      height={70}
      alt="Black Wizards Technology logo"
      onClick={() => {
        router.push("/");
      }}
    />
  );
}
