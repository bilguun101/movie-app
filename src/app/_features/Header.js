"use client";
import { useState, useEffect } from "react";
import { DownIcon } from "../icon/downIcon";
import { Genre } from "../_componentOfHomePage/Genre";
import { SearchBar } from "../_componentOfHomePage/SearchBar";
import { useRouter } from "next/navigation";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    }
}

export const Header = (props) => {

    const { onClick, logoStyle } = props;

    const router = useRouter();

    const [movies, setMovies] = useState([]);
    const [showGenre, setShowGenre] = useState(false);

    const [values, setValues] = useState("");

    const handleInputValue = (e) => {
        setValues(e.target.value);
        setShowGenre(false);
    }

    const getData = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${values}&language=en-US&page=1`,
            options
        );
        const jsondata = await data.json();
        setMovies(jsondata.results);
    }

    useEffect(() => {
        getData();
    }, [values]);

    const handleGenreButton = () => {
        setShowGenre(prev => !prev);
        setValues("");
    }

    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-row justify-around items-center mt-[12px]" >
                <img
                    onClick={onClick}
                    className={logoStyle} src="/moviez.png" alt="" />
                <div className="flex gap-[12px]">
                    <button
                        onClick={handleGenreButton}
                        className="border border-gray-200 rounded-md text-gray-900 w-[97px] h-[38px] cursor-pointer hover:bg-gray-100 flex justify-center items-center gap-[8px]"> <DownIcon /> Genre </button>
                    {showGenre && <Genre />}
                    <div
                        className="border border-gray-200 rounded-md flex items-center justify-center pl-[15px]">
                        <img className="w-[16px] h-[16px]" src="/magnifying-glass.png" />
                        <input
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && values.trim() !== "") {
                                    router.push(`/SeeMoreOf/${values}`);
                                }
                            }}
                            placeholder="Search..."
                            className="placeholder-gray-400 sm:w-[379px] h-[36px] focus:outline-none pl-[14px] max-sm:w-[30px]"
                            value={values}
                            onChange={handleInputValue} />
                    </div>
                </div>
                <button
                    className="border border-gray-200 rounded-lg w-[36px] h-[36px] flex justify-center items-center cursor-pointer"> <img src="/moon.png" /> </button>
            </div>
            <div className="relative flex justify-center">
                <SearchBar movies={movies} values={values} />
            </div>

        </div >

    );
}
