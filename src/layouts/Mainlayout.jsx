// rrd imports
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mainlayout() {
  return (
    <>
      <Navbar />
      <main className="container grow mx-auto px-2 lg:px-40">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Mainlayout;
