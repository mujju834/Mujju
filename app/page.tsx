"use client"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Skills from './Components/Skills';
import Skills2 from './Components/Skills2';
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
        <Skills2 />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
