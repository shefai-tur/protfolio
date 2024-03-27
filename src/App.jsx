import { useState } from 'react'

import About from "./components/About";
import Banner from "./components/Banner";
import Fotter from "./components/Fotter";
import GetInTouch from "./components/GetInTouch";
import LatestWorks from "./components/LatestWorks";
import Sidbar from "./components/Sidbar";
import Skill from "./components/Skill";
import Testimonials from "./components/Testimonials";

function App() {


  return (
    <main class="flex flex-col h-screen">
    <div class="flex flex-1 overflow-hidden">
      <div class="flex bg-gray-100 w-[140px]p-4">
        <Sidbar />
      </div>
      <div class="flex flex-1 flex-col overflow-y-auto">
      <Banner />
      <About />
      <Skill />
      <LatestWorks />
      <Testimonials />
        <GetInTouch /> 
      </div>
    </div>
    <div>

      <Fotter />
    </div>
  </main>
  )
}

export default App
