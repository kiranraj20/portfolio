import "./App.css";
import LandingPage from "./components/landingPage.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <SpeedInsights>
      <div className="App m-0 p-0 w-screen h-screen overflow-scroll no-scrollbar">
        <LandingPage />
      </div>
    </SpeedInsights>
  );
}

export default App;
