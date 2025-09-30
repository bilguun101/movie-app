"use client";
import { useState, useEffect } from "react";
import { RightVector } from "../icon/rightVector";
import { Longline } from "../icon/LongLine";

const apiLink = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    }
}

export const Genre = () => {

    const [genreData, setGenreData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const data = await fetch(apiLink, options);
        const jsonData = await data.json();
        console.log("genre", jsonData);
        setGenreData(jsonData.genres);
        setLoading(false);

    }

    useEffect(() => {
        getData();
    }, []);

    console.log(genreData)


    if (!loading && typeof genreData === undefined) {
        return <div> Something went wrong </div>
    }

    return (
        <div className="absolute border border-gray-200 w-[577px] h-[333px] bg-white z-1 mt-[48px] rounded-lg p-[20px]">
            <p className="font-[600] text-[24px]"> Genres </p>
            <p className="font-[400] text-[16px] mb-[10px]"> See lists of movies by genre  </p>
            <Longline />
            <div className="mt-[10px] flex flex-wrap gap-[16px]">
                {genreData.map((movie, name) => {
                    return <div
                        key={name}
                        className="flex flex-wrap gap-[16px]">
                        <button className="border border-gray-200 rounded-full font-[600] text-[14px] flex justify-center items-center gap-[8px] min-w-[20px] h-[30px] cursor-pointer pr-[10px] pl-[10px] pt-[2px] pb-[2px] hover:bg-gray-100"> {movie.name} <RightVector /> </button>
                    </div>;
                })}
            </div>

        </div>
    );
}
// border border-gray-200 rounded-full font-[600] text-[12px] flex justify-center items-center gap-[8px] w-auto h-[20px] cursor-pointer pr-[10px] pl-[10px] pt-[2px] pb-[2px]