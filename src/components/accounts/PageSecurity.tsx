"use client";

import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PageSecurity() {
  const _id = useSelector((state: RootState) => state.users.user?._id);
  const router = useRouter();

  useEffect(() => {
    if (!_id) {
      router.push("/login");
    }
  }, [_id, router]);
  return <p></p>;
}
