"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className="min-h-[400px]">{children}</main>
    </>
  );
}
