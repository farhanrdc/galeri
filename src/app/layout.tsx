import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Galeri App",
  description: "Generated Farhan Ramadhan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav(){
  return (
    <nav className="flex w-full items-center justify-between text-xl font-semibold border-b p-4">
      <div>Galeri</div>
      <div>Sign in</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4 min-h-screen`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
