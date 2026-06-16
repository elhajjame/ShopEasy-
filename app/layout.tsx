import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "@/app/globals.css";
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <html>
        <body>
          <Navbar />
          <main className="main container py-8">{children}</main>
          <Footer />
        </body>
      </html>
    </div>
  );
}

export default RootLayout;
