import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMD:CYBR - Cybersecurity Solutions & Digital Innovation",
  description: "Your trusted partner in cybersecurity solutions and digital innovation. We provide cutting-edge technology to protect and empower your digital future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
