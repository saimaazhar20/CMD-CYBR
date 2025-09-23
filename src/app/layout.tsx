import "./globals.css";
import BackToTop from "../components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>CMD:CYBR - Cybersecurity Solutions & Digital Innovation</title>
        <meta name="description" content="Your trusted partner in cybersecurity solutions and digital innovation. We provide cutting-edge technology to protect and empower your digital future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        <div className="page-enter-active">
          {children}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
