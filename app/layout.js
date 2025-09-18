import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import ConvexClientProvider from "@/splitzy/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Splitzy",
  description: "Smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      <body
        className={`${inter.className} `}
      >
        <ClerkProvider>
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
          </ConvexClientProvider>
        </ClerkProvider>

      </body>
    </html>
  );
}
