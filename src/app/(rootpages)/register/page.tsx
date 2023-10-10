import type { Metadata } from "next";
import RegisterComponent from "@/components/accounts/register";

export const metadata: Metadata = {
  title: "Register",
  description: "We are the best",
};
export default function Register() {
  return <RegisterComponent />;
}
