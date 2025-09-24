import { DownIcon } from "../icon/downIcon";

export const Header = () => {
    return (
        <div
            className="flex flex-row justify-around items-center pt-[12px]">
            <img className="w-[102px]" src="moviez.png" alt="" />
            <div className="flex gap-[12px]">
                <button className="border border-gray-200 rounded-md text-gray-900 w-[97px] h-[38px] cursor-pointer hover:bg-gray-100 flex justify-center items-center gap-[8px]"> <DownIcon /> Genre </button>
                <div
                    className="border border-gray-200 rounded-md flex items-center justify-center pl-[15px]">
                    <img className="w-[16px] h-[16px]" src="magnifying-glass.png" />
                    <input
                        placeholder="Search..."
                        className="placeholder-gray-400 w-[379px] h-[36px] focus:outline-none pl-[14px]" />
                </div>
            </div>
            <button className="border border-gray-200 rounded-lg w-[36px] h-[36px] flex justify-center items-center cursor-pointer"> <img src="moon.png" /> </button>
        </div>

    );
}