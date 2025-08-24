import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
