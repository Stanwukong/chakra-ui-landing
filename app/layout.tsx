'use client';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from 'landing/components/Footer';
import Navbar from 'landing/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body>
        <ChakraProvider>
         
            <Navbar />
            {children}
            <Footer /> 
          
        </ChakraProvider>
        </body>
      </html>
    
  )
}
