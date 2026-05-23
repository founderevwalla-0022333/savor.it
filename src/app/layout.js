import "./globals.css";
import ClientLayout from "./ClientLayout";
import LayoutShell from "@/components/layout/LayoutShell";

export const metadata = {
  title: "Savor.it — Build a space that inspires you.",
  description: "A curated lifestyle discovery platform for modern setups and aesthetic products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FCFBF9] text-[#141414] antialiased">
        <ClientLayout>
          <LayoutShell>{children}</LayoutShell>
        </ClientLayout>
      </body>
    </html>
  );
}
