import type { Metadata } from "next";
import LoginComponent from "@/components/accounts/login";

export const metadata: Metadata = {
  title: "Join our community",
  description: "We are the best",
};
export default function Login() {
  return <LoginComponent />;
}
