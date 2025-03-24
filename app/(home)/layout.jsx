import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
