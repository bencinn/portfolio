import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Heart from "@/components/heart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "hansnnn.me",
    description: "I'm hansnnn, a front-end/full stack developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex min-h-screen flex-col items-center justify-between p-24 lg:p-10">
                    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
                        <Navbar />
                    </div>
                    <div className="flex items-center flex-col m-10 gap-36">
                        {children}
                    </div>

                    <Heart />

                </main>
            </body>
        </html>
    );
}
