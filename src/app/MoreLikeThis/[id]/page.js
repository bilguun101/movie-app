"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MovieList } from "../../_componentOfHomePage/MovieCard";
import { Footer } from "../../_features/Footer";
import { MovieUpperText2 } from "../../_componentOfHomePage/MovieUpperText2";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    }
};

export default function MoreLikeThisPage() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiLink = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;

    const getData = async () => {
        setLoading(true);
        try {
            const data = await fetch(apiLink, options);
            const jsonData = await data.json();
            setMovies(jsonData.results.slice(0, 20));
        } catch (error) {
            console.error("Error fetching similar movies:", error);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) getData();
    }, [id]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="w-[1440px] mx-auto">
            <MovieUpperText2 leftText="More Like This" />

            <div className="flex flex-wrap justify-between ml-[80px] mr-[80px] mt-[40px] gap-[12px]">
                {movies.map((movie) => (
                    <MovieList
                        key={movie.id}
                        movieId={movie.id}
                        title={movie.title}
                        image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        rating={movie.vote_average.toFixed(1)}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
