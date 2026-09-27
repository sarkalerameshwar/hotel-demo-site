"use client";

import { Toaster as SonnerToaster } from "sonner";

export function ToasterProvider() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#1D1B17",
          color: "#FAF8F5",
          border: "1px solid #B88936",
          borderRadius: "12px",
          padding: "16px",
          fontFamily: "var(--font-plus-jakarta)",
        },
      }}
    />
  );
}
