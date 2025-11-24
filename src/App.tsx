import { useEffect, useState } from "react";
import "./App.css";
import { StarGrid } from "./components/layout/StarGrid";
import { Spotlight } from "./components/layout/Spotlight";
import { MobileGlow } from "./components/layout/MobileGlow";
import { Navigation } from "./components/layout/Navigation";
import { Hero } from "./components/layout/Hero";
import { FooterIcons } from "./components/layout/FooterIcons";

function App() {
    const [lightsOn, setLightsOn] = useState(false);

    /* The flickering effect on startup */
    useEffect(() => {
        const timer = setTimeout(() => setLightsOn(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-neutral-950 font-sans text-neutral-200 selection:bg-[var(--arcady-green)/30] selection:text-(--arcady-green)">
            <StarGrid />
            <Spotlight enabled={lightsOn} />
            <MobileGlow />
            <Navigation lightsOn={lightsOn} />
            <Hero lightsOn={lightsOn} />
            <FooterIcons lightsOn={lightsOn} />
        </div>
    );
}

export default App;
