import type { Metadata } from "next";
import DashboardComponent from "@/components/accounts/dashboard";

export const metadata: Metadata = {
  title: "Welcome to Black Wizards Technolgy",
  description: "We are the best",
};
export default function Login() {
  return <DashboardComponent />;
}
