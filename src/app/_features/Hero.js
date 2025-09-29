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


export const Hero = (props) => {

    const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const data = await fetch(apiLink, options);
        const jsonData = await data.json();
        console.log("nowplaying", jsonData)
        setNowPlayingMoviesData(jsonData.results.slice(0, 3));
        setTimeout(() => {
            setLoading(false);
        }, 100000)

    }

    console.log("loading", loading);
    console.log("nowPlayingMoviesData", nowPlayingMoviesData);


    useEffect(() => {
        getData();
    }, []);

    // if (loading) {
    //     return (
    //         <div> ...Loading </div>
    //     );
    // }
    if (!loading && typeof nowPlayingMoviesData === undefined) {
        return <div> Something went wrong </div>
    }

    const [slider, setSlider] = useState(0);

    const slideNumber = (slider * 100) / 3;

    const handleSlider = () => {
        setSlider(slider + 1);
    }
    const handleReverseSlider = () => {
        setSlider(slider - 1);
    }

    return (
        <div className="w-full overflow-hidden">
            <div className="flex w-[300%] transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${slideNumber}%)` }}>
                {nowPlayingMoviesData.map((movie, index) => {
                    return <OneHeroSlider
                        key={index}
                        name={movie.title}
                        rating={Math.round(movie.vote_average)}
                        text={movie.overview}
                        total={nowPlayingMoviesData.length}
                        index={index}
                        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        addNextButton={handleSlider}
                        addBackButton={handleReverseSlider} />
                })}
            </div>
            {console.log(nowPlayingMoviesData.length)}
        </div>
    );
}