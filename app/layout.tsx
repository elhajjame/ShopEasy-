import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "@/app/globals.css";
function RootLayout({ children }) {
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
