import type { Metadata } from "next";
import RegisterComponent from "@/components/accounts/register";

export const metadata: Metadata = {
  title: "Join our community",
  description: "We are the best",
};
export default function Register() {
  return <RegisterComponent />;
}
