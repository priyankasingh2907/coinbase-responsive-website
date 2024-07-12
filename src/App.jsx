import AboutUs from "./Components/AboutUs";
import DailyPrices from "./Components/DailyPrices";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Service />
    </div>
  );
}
