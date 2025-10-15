"use client";
import { useEffect, useState } from "react";
import { MovieList } from "../_componentOfHomePage/MovieCard";
import { MovieUpperText2 } from "../_componentOfHomePage/MovieUpperText2";
import { Footer } from "../_features/Footer";
import { useRouter } from "next/navigation";
import { Header } from "../_features/Header";



const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    }
}

export default function UpcomingMovieList() {

    const [upcomingMoviesData, setUpcomingMoviesData] = useState([]);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleHomeButton = () => {
        router.push('/');
    }

    const apiLink = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

    const getData = async () => {
        setLoading(true);
        try {
            const data = await fetch(apiLink, options);
            const jsonData = await data.json();
            setUpcomingMoviesData(jsonData.results.slice(0, 20));
        } catch (error) {
            console.error("Error fetching upcoming movies:", error);
            setUpcomingMoviesData([]);
        } finally {
            setLoading(false);
        }
    };

    console.log("loading", loading);
    console.log("upcomingMoviesData", upcomingMoviesData);


    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return (
            <div> ...Loading </div>
        );
    }
    if (!loading && typeof upcomingMoviesData === undefined) {
        return <div> Something went wrong </div>
    }

    return (
        <>
            <div className="w-[1440px] mx-auto">
                <Header
                    onClick={handleHomeButton}
                    logoStyle={"cursor-pointer"} />
                <MovieUpperText2
                    leftText={"Popular"} />

                <div className="flex flex-wrap justify-between ml-[80px] mr-[80px] mt-[40px] gap-[12px]">

                    {upcomingMoviesData.map((movie, index) => {
                        return <MovieList
                            key={index}
                            movieId={movie.id}
                            title={movie.title}
                            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            rating={movie.vote_average.toFixed(1)} />;
                    })}
                </div>
                <Footer />
            </div>
        </>
    );

}