import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL("https://msproductstudio.github.io"), title: "MS Product Studio", description: "Estúdio independente de Matheus Silva. Engenharia de software, produtos digitais e experimentação.", robots: {index: true, follow: true}, icons: {icon: "/studio-icon.svg"} };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return children; }
