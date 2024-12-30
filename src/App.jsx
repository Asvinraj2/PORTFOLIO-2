import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/home'
import Skills from './components/skills/Skills'
import Aboutme from './components/aboutMe/Aboutme'
import Project from './components/projects/Project'
import Achivement from './components/achivement/Achivement'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
    <Navbar />
    <Home />
    <Aboutme />
    <Skills />
    <Project />
    <Achivement />
    < Contact />
    </div>
  )
}

export default App
