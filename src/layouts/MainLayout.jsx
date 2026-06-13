import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../sections/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
