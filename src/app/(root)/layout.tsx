
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       <Header />
        <main className="flex-1 wrapper">{children}</main>
<Footer />
 </ThemeProvider>
    </div>
  );
}