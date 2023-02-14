'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from 'landing/components/Hero'
import Features from 'landing/components/Features'
import Testimonials from 'landing/components/Testimonials'



export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
    </div>
  )
}
