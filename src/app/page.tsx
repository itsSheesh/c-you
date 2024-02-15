"use client"
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import MainCarousel from "@/components/MainCarousel";
import NewestCarousel from "@/components/NewestCarousel";
import StockCarousel from "@/components/StockCarousel";
import SubHero from "@/components/SubHero";
import Footer from "@/components/layout/Footer";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import SubFooter from "@/components/layout/SubFooter";
import Navbar from "@/components/layout/navbar";

function MyComponent() {
  
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <Hero />
      <SubHero />
      <Divider />
      <MainCarousel />
      <div className="mt-4 w-full bg-slate-700 min-h-[16px] max-md:max-w-full" />
      <NewestCarousel />
      <div className="mt-4 w-full bg-slate-700 min-h-[16px] max-md:max-w-full" />
      <StockCarousel />
      <Footer />
      <SubFooter />
    </div>
  );
}


export default MyComponent