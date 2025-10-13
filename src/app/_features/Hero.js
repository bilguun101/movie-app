"use client";
import { useState, useEffect } from "react";
import { OneHeroSlider } from "../_heroSlider/OneHeroSlider";

const apiLink = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    }
}


export const Hero = () => {

    const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [trailerKey, setTrailerKey] = useState(null);
    const [slider, setSlider] = useState(0);



    const getData = async () => {
        setLoading(true);
        const data = await fetch(apiLink, options);
        const jsonData = await data.json();
        console.log("nowplaying", jsonData);
        setNowPlayingMoviesData(jsonData.results.slice(0, 3));
        setTimeout(() => {
            setLoading(false);
        }, 100000)

    }

    useEffect(() => {
        getData();
    }, []);

    const fetchTrailer = async (id) => {
        try {


            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                options
            );
            const jsonData = await data.json();
            console.log(jsonData);

            const trailer = jsonData.results.find(
                (vid) => vid.type === "Trailer" && vid.site === "YouTube"
            );

            if (trailer) {
                setTrailerKey(trailer.key);
            }
            else {
                setTrailerKey(null)
            }
        }
        catch (err) {
            console.error("ts pmo twin", err);
        }
    };
    console.log("this is trailer key", trailerKey);




    // if (loading) {
    //     return (
    //         <div> ...Loading </div>x
    //     );
    // }
    if (!loading && typeof nowPlayingMoviesData === undefined) {
        return <div> Something went wrong </div>
    }


    const slideNumber = (slider * 100) / 3;

    const handleSlider = () => {
        setSlider(slider + 1);
    }
    const handleReverseSlider = () => {
        setSlider(slider - 1);
    }

    return (
        <>
            <div className="w-full overflow-hidden">
                <div className="flex w-[300%] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${slideNumber}%)` }}>
                    {nowPlayingMoviesData.map((movie, index) => {
                        return <OneHeroSlider
                            key={index}
                            onClick={() => fetchTrailer(movie.id)}
                            name={movie.title}
                            rating={movie.vote_average.toFixed(1)}
                            text={movie.overview}
                            total={nowPlayingMoviesData.length}
                            index={index}
                            image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            addNextButton={handleSlider}
                            addBackButton={handleReverseSlider} />
                    })}
                </div>
            </div>
            {trailerKey && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-[50]">
                    <div className="relative w-[800px] max-w-full h-[450px]">
                        <button
                            onClick={() => setTrailerKey(null)}
                            className="absolute flex justify-center items-center w-[25px] h-[25px] rounded-full top-1 right-1 bg-white/80 text-xl font-bold hover:text-red-400 cursor-pointer"> x </button>

                        <iframe
                            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                            title="Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                            className="w-full h-full rounded-xl"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}