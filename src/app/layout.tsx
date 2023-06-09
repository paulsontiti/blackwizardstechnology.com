//import './globals.css'
import Footer from "@/components/Footer";
import HomeAppBar from "@/components/home/AppBar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <HomeAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
