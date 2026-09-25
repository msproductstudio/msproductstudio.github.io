import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL("https://msproductstudio.github.io"), title: "Matheus Silva — MS Product Studio", description: "Software engineering, distributed systems and bio-inspired computing. The personal portfolio of Matheus Silva.", robots: {index: true, follow: true}, icons: {icon: "/icon.svg"} };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return children; }
