import type { Metadata } from "next";
import LoginComponent from "@/components/accounts/login";

export const metadata: Metadata = {
  title: "Login",
  description: "We are the best",
};
export default function Login() {
  return <LoginComponent />;
}
