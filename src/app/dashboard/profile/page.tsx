import ProfileComponent from "@/components/profile/ProfileComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "We are the best",
};
export default function ProfilePage() {
  return <ProfileComponent />;
}
