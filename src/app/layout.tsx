import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AssetLens AI | Collateral Valuation & Liquidity Engine",
  description: "AI-powered real estate collateral intelligence for lenders and fintechs. Precise valuation, liquidity risk, and market insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid-bg" />
        <div className="blob" style={{ top: '-100px', right: '-100px' }} />
        <div className="blob" style={{ bottom: '-100px', left: '-100px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' }} />
        {children}
      </body>
    </html>
  );
}
