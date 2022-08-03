import { Router, Routes, Route } from "@solidjs/router";
import Navbar from "./Components/Navbar/Navbar";
import Electricity from "./Components/Everything/Electricity";
import Fridge from "./Components/Everything/Electricity/Fridge";
import Heater from "./Components/Everything/Electricity/Heater";
import Lighting from "./Components/Everything/Electricity/Lighting";
import WashingMachine from "./Components/Everything/Electricity/WashingMachine";
import Overview from "./Components/Everything/Overview";
import ElecTotal from "./Components/Everything/Electricity/ElecTotal";
import AC from "./Components/Everything/Electricity/AC";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import { getCategoryCompletionStates } from "./State/calculator";

export default function App() {
  return (
    <div class="bg-neutral-800">
      <Navbar />
      <div class="pb-60">
        <Router>
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/me/" element={Profile} />
            <Route path="/me/overview" element={Overview} />
            <Route path="/me/electricity" element={Electricity} />
            <Route path="/me/electricity/ac" element={AC} />
            <Route path="/me/electricity/heater" element={Heater} />
            <Route path="/me/electricity/fridge" element={Fridge} />
            <Route path="/me/electricity/lighting" element={Lighting} />
            <Route
              path="/me/electricity/washing-machine"
              element={WashingMachine}
            />
            <Route path="/me/electricity/total" element={ElecTotal} />
            <Route
              path="/about"
              element={<div>This site was made with Solid</div>}
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

// getCategoryCompletionStates
// getEditing

// /
// /me <- overview - checks if there is something already added, if not, prompts you to add stuff
// /me/electricity
// /me/electricity/ac
// /me/electricity/heater
// /me/electricity/fridge
// /me/electricity/lighting
// /me/electricity/washing-machine
// /me/electricity/total <- shows the total, has button to go to overview

// state to true if checkbox is clicked and navigates you to the correct pages

// /me/water/cold
// /me/water/hot
