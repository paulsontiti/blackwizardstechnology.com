"use client";

import ErrorComponent from "@/components/ErrorComponent";

export default function RootPageError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error.stack);
  return <ErrorComponent error={error} reset={reset} />;
}
