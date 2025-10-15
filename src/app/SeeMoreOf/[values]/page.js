"use client";
import { useState, useEffect } from "react";
import { MovieList } from "../../_componentOfHomePage/MovieCard";
import { Header } from "../../_features/Header";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { RightVector } from "@/app/icon/rightVector";

const apiLink = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    }
}

export default function SeeMoreOf() {

    const params = useParams();

    const { values } = params;

    const [moviesData, setMoviesData] = useState([]);

    const getData = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${values}&language=en-US&page=1`,
            options
        );
        const jsondata = await data.json();
        setMoviesData(jsondata.results);
    }

    const [genreData, setGenreData] = useState([]);

    const getGenres = async () => {
        const data = await fetch(apiLink, options);
        const jsonData = await data.json();
        console.log("genre", jsonData);
        setGenreData(jsonData.genres);
    }

    useEffect(() => {
        getData();
        getGenres();
    }, [values]);

    const router = useRouter();

    const handleHomeButton = () => {
        router.push('/');
    }

    return (
        <>
            <div className="w-[1440px] m-auto">
                <div>
                    <Header
                        logoStyle={"cursor-pointer"}
                        onClick={handleHomeButton} />
                </div>
                <div className="mt-[52px]">
                    <p className="text-[30px] font-[600] mb-[32px]"> Search filter </p>
                    <div className="flex flex-row gap-[20px]">
                        {moviesData && (
                            <div className="flex flex-wrap justify-between gap-[12px] w-[75%]">
                                {moviesData.map((movie, index) => {
                                    return (
                                        <MovieList
                                            key={index}
                                            movieId={movie.id}
                                            title={movie.title}
                                            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                            rating={movie.vote_average.toFixed(1)}
                                        />
                                    );
                                })}
                            </div>
                        )}
                        <div className="w-px bg-gray-300 h-[1189px]"></div>
                        <div className="w-[387px] h-[352px]">
                            <p className="text-[24px] font-[600]"> Genres </p>
                            <p className="text-[16px] font-[400] mt-[4px]"> See lists of movies by genre </p>
                            <div className="flex flex-wrap gap-[16px] mt-[20px]">
                                {genreData.map((movie, name) => {
                                    return <div
                                        key={name}>
                                        <Link href={`/GenreList/${movie.id}`}>
                                            <button
                                                className="border border-gray-200 rounded-full font-[600] text-[14px] flex justify-center items-center gap-[8px] min-w-[20px] h-[30px] cursor-pointer pr-[10px] pl-[10px] pt-[2px] pb-[2px] hover:bg-gray-100" > {movie.name} < RightVector /> </button>
                                        </Link>
                                    </div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}