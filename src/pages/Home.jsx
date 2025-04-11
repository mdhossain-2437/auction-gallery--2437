import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ActiveAuctions from "../components/ActiveAuctions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ActiveAuctions />
      <Footer />
    </div>
  );
}