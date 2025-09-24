import Image from "next/image";

// posters
import { Header } from "./_features/Header";
import { Hero } from "./_features/Hero";
import { MovieList } from "./_features/MovieList";
import { Footer } from "./_features/Footer";



export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <MovieList
        leftText={"Upcoming"}
        image={"/alien.jpg"}
        innerText={"Alien Romulus"} />

      <MovieList
        leftText={"Popular"}
        image={"/alien.jpg"}
        innerText={"Alien Romulus"} />

      <MovieList
        leftText={"Top Rated"}
        image={"/alien.jpg"}
        innerText={"Alien Romulus"} />

      <Footer />

    </div>
  );
}
