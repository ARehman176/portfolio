// pages/Home.jsx
import React from 'react';
import HeroSection from '../Component/Herosection';
import Skill from '../Component/Skill';
import About from '../Component/About';
import Study from '../Component/Study';
import Work from '../Component/Work';
import Talk from '../Component/Talk';
import Footer from '../Component/Footer';
// import './App.css'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skill />
      <About />
      <Study />
      <Work />
      <Talk />
      <Footer />
    </>
  );
}