"use client";

import ErrorComponent from "@/components/ErrorComponent";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <ErrorComponent error={error} reset={reset} />;
}
