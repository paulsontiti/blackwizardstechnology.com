import type { Metadata } from "next";
import ResetPasswordForm from "@/components/accounts/resetPassword";

export const metadata: Metadata = {
  title: "Reset your password",
  description: "Please provide your username,new password and confirm password",
};
export default function ResetPassword() {
  return <ResetPasswordForm />;
}
