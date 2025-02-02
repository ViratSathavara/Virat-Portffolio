  import { useState } from 'react'
  import Topbar from './components/Topbar'
  import Bottombar from './components/Bottombar'
  import Home from './components/Home'
  import Intro from './components/Intro'
  import Experience from './components/Experience'
  import Project from './components/Project'
  import Skills from './components/Skills'

  function App() {

    return (
      <>
      <Topbar />
      <div className="h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
        <Home />
        <Intro />
        <Experience />
        <Skills />
        <Project />
      </div>
      <Bottombar />
      </>
    )
  }

  export default App
