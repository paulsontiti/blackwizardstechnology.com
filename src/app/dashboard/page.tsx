import type { Metadata } from "next";
import DashboardComponent from "@/components/accounts/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "We are the best",
};
export default function Dashboard() {
  return <DashboardComponent />;
}
