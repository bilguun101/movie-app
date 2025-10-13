"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/app/_features/Header";
import { Star } from "@/app/icon/star";
import { PlayButton } from "@/app/icon/playButton";
import { LongestLine } from "@/app/icon/longestLine";
import { RightArrow } from "@/app/icon/rightArrow";
import { Footer } from "@/app/_features/Footer";
import { MovieList2 } from "@/app/_componentOfHomePage/MovieCard2";
import { useRouter } from "next/navigation";


const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    }
}

export const MovieDetailPage = () => {

    const param = useParams()

    const { id } = param;

    const router = useRouter();

    const [moviesData, setMoviesData] = useState([]);
    const [moviesInform, setMoviesInform] = useState();
    const [moviesMore, setMoviesMore] = useState([]);
    const [trailerKey, setTrailerKey] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleMoreLikeThisButton = () => {
        router.push(`/MoreLikeThis/${id}`);
    }

    const handleHomeButton = () => {
        router.push('/');
    }

    const getData = async () => {
        setLoading(true);
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
        );
        const jsonData = await data.json();
        setMoviesData(jsonData);

        console.log("hahahah", jsonData);

        setTimeout(() => {
            setLoading(false);
        }, 100);
    }

    const getInform = async () => {
        setLoading(true);
        const inform = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
            options
        );
        const jsonData = await inform.json();
        setMoviesInform(jsonData);

        console.log("inform: ", jsonData)

        setTimeout(() => {
            setLoading(false);
        }, 100);
    }

    const getMore = async () => {
        setLoading(true);
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
            options
        );
        const jsonData = await data.json();
        setMoviesMore(jsonData.results.slice(0, 5));

        console.log("more: ", jsonData.results);

        setLoading(false);
    }

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


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getInform();
    }, []);

    useEffect(() => {
        getMore();
    }, []);




    return (
        <>
            <Header
                logoStyle={"w-[102px] cursor-pointer"}
                onClick={handleHomeButton}
            />
            {moviesData &&
                <div className="w-[1080px] mx-auto mt-[52px]">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p className="font-[700] text-[36px]"> {moviesData.title} </p>
                            <p className="font-[400] text-[18px]"> {moviesData.release_date} </p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p> Rating </p>
                            <p className="flex"> <Star /> {moviesData.vote_average?.toFixed(1)}/10 </p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[24px]">
                        <img
                            className="w-[290px] h-[428px]"
                            src={`https://image.tmdb.org/t/p/original${moviesData.poster_path}`} />
                        <div className="h-[428px] w-[760px] relative flex justify-start items-end mb-[24px] ml-[24px]">
                            <img
                                className="absolute z-[-1]"
                                src={`https://image.tmdb.org/t/p/original${moviesData.backdrop_path}`} />
                            <div className="flex justify-center items-center gap-[12px] mb-[24px] ml-[24px]">
                                <button
                                    onClick={() => fetchTrailer(moviesData.id)}
                                    className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer hover:opacity-85 duration-100"> <PlayButton /> </button>
                                <p className="text-white"> Play trailer </p>
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
                    </div>
                    <div>
                        {moviesData.genres?.length > 0 && (
                            <div className="flex gap-3 flex-wrap">
                                {moviesData.genres.map((genre) => (
                                    <span
                                        key={genre.id}
                                        className="border border-gray-300 rounded-xl text-[12px] pr-[5px] pl-[5px] font-[600]">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-[20px]">
                        {moviesData.overview}
                    </div>
                    <div className="mt-[20px] flex gap-[70px] mb-[15px]">
                        <p className="font-[700] text-[16px]">Director</p>
                        <div className="flex gap-[20px]">
                            {moviesInform?.crew
                                .slice(0, 1)
                                .map((director) => (
                                    <span
                                        key={director.id}
                                        className="text-[16px]"
                                    >
                                        {director.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                    <LongestLine />
                    <div className="mt-[20px] flex gap-[70px] mb-[15px]">
                        <p className="font-[700] text-[16px]">Writers</p>
                        <div className="flex gap-[20px]">
                            {moviesInform?.crew
                                .slice(2, 4)
                                .map((director) => (
                                    <span
                                        key={director.id}
                                        className="text-[16px]"
                                    >
                                        {director.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                    <LongestLine />
                    <div className="mt-[20px] flex gap-[80px] mb-[15px]">
                        <p className="font-[700] text-[16px]">Stars</p>
                        <div className="flex gap-[20px]">
                            {moviesInform?.cast
                                .slice(5, 8)
                                .map((director) => (
                                    <span
                                        key={director.id}
                                        className="text-[16px]"
                                    >
                                        {director.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                    <LongestLine />
                    <div className="flex justify-between items-center mt-[20px]">
                        <p className="text-[24px] font-[600]"> More like this </p>
                        <button
                            onClick={handleMoreLikeThisButton}
                            className="text-[14px] font-[500] flex justify-center items-center gap-[8px] cursor-pointer"> See more <RightArrow /> </button>
                    </div>
                    <div className="flex justify-between items-center mt-[30px]">
                        {moviesMore?.map((movie, id) => {
                            return <MovieList2
                                key={id}
                                movieId={movie.id}
                                title={movie.title}
                                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                rating={movie.vote_average.toFixed(1)} />
                        })}
                    </div>
                    <Footer />
                </div>
            }

        </>
    );
}