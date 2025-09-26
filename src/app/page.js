"use client";

// posters

import { Header } from "./_features/Header";
import { Hero } from "./_features/Hero";
import { Footer } from "./_features/Footer";
import { UpcomingMovieList } from "./_features/UpcomingMovieList";
import { PopularMovieList } from "./_features/PopularMovieList";
import { TopRatedMovieList } from "./_features/TopRatedMovieList";

export default function Home() {

  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[1440px]">
        <Header />

        <Hero />

        <UpcomingMovieList />

        <PopularMovieList />

        <TopRatedMovieList />

        <Footer />

      </div>
    </div>
  );
}
