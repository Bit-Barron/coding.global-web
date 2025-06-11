"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

/**
 * QueryProvider component
 * Sets up a QueryClientProvider for React Query to manage and cache API requests.
 */
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
