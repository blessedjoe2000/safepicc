import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
