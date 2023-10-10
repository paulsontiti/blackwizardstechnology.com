import { Inter } from "next/font/google";
import PageSecurity from "@/components/accounts/PageSecurity";
import HomeAppBar from "@/components/home/AppBar";
import Footer from "@/components/home/Footer";
import BWTThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BWTThemeProvider>
          <HomeAppBar />
          <PageSecurity />

          {children}
          <Footer />
        </BWTThemeProvider>
      </body>
    </html>
  );
}
