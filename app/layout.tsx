import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import StyledComponentsRegistry from "@/lib/registry";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Madster - Menos Conversinha, Mais Conversão.",
  description: "Madster - Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main className="overflow-hidden">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <Footer />
      </body>
    </html>
  );
}
