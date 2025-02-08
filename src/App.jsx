import { useState } from "react";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Topbar />
      <div className="overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
        <Home className="min-h-screen" />
        <Intro className="min-h-screen" />
        <Experience className="min-h-screen" />
        <Skills className="min-h-screen" />
        <Project className="min-h-screen" />
        <ContactUs className="min-h-screen" />
      </div>

      {/* <Bottombar /> */}
    </>
  );
}

export default App;
