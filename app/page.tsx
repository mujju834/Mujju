"use client"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const MainClientComponent = dynamic(() => import('./Components/Main.client'), {
  suspense: true,
});

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MainClientComponent />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
