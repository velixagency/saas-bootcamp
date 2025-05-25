import "./globals.css";
export const metadata = { title: "SaaS Bootcamp" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}