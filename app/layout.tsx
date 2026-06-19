import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "@/app/globals.css";
import { CartProvider } from "./_context/CartContext";
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <html>
        <body>
          <Navbar />
          <CartProvider>
            <main className="main container py-8">{children}</main>
          </CartProvider>
          <Footer />
        </body>
      </html>
    </div>
  );
}

export default RootLayout;
