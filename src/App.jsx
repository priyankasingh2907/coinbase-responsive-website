import AboutUs from "./Components/AboutUs";
import DailyPrices from "./Components/DailyPrices";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewsLetter from "./Components/NewsLetter";
import RoadMap from "./Components/RoadMap";
import Service from "./Components/Service";
import SignUp from "./Components/SignUp";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Service />
      <SignUp />
      <RoadMap />
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
