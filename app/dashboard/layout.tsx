"use client";

import Navbar from "@/components/DashboardContents/Navbar";
import Sidebar from "@/components/DashboardContents/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* <Sidebar /> */}
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
