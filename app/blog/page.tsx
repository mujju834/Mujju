"use client"
import { Suspense } from 'react';
import Header from './Header';



export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>

    </div>
  );
}
