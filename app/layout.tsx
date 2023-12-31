import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { rootInitialState } from "@/store/root-reducer";
import { ReduxProvider } from "@/components/reduxProvider/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}

export default RootLayout;
