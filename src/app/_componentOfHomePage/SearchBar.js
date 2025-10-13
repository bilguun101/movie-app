import Link from "next/link";
import { RightArrow } from "../icon/rightArrow";

export const SearchBar = ({ movies, values }) => {
    return (
        <>
            <div className="absolute w-[577px] max-h-[729px] overflow-y-auto rounded-lg bg-white shadow-lg z-50 mt-[20px]">
                {values.length > 0 && <div>
                    {
                        movies.slice(0, 5).map((movie) => (
                            <div
                                key={movie.id}
                                className="flex flex-col justify-center items-center">
                                <div className="relative p-4 hover:bg-gray-100 w-full h-[100px] flex gap-4"
                                >
                                    {movie.poster_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                                            alt={movie.title}
                                            className="w-[50px] h-[75px] rounded object-cover"
                                        />
                                    ) : (
                                        <div className="w-[50px] h-[75px] bg-gray-300 rounded" />
                                    )}

                                    <div className="flex flex-col justify-between w-full pr-24">
                                        <p className="font-medium text-gray-900">{movie.title}</p>
                                        <p className="text-sm text-gray-500">{movie.release_date || "Unknown"}</p>
                                    </div>

                                    <Link href={`/movie-detail/${movie.id}`}>
                                        <button
                                            className="absolute bottom-4 right-4 flex items-center gap-1 cursor-pointer">
                                            See more <RightArrow />
                                        </button>
                                    </Link>
                                </div>
                                <div className="w-[553px] h-px bg-gray-300"></div>
                            </div>
                        ))
                    }
                    <div
                        key={values}
                        className="flex justify-start items-center mb-[12px] mt-[10px] ml-[28px]">
                        <button className="cursor-pointer hover:text-gray-600"> See all results for &quot;{values}&quot; </button>
                    </div>
                </div>
                }
            </div >
        </>
    );
};

