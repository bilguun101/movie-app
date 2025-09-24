import { Star } from "../icon/star";
import { PlayButton } from "../icon/playButton";
import { RightVector } from "../icon/rightVector";


export const Hero = () => {
    return (
        <div className="aspect-1440/600 mt-[36px] mb-[-20px] relative flex items-center justify-between">
            <img className="w-[100%] h-[100%] object-cover absolute z-[-1]" src="wicked.png" alt="" />
            <div className="flex flex-col w-[302px] text-white ml-[300px]">
                <p className="text-[36px] font-[400]"> Now Playing: </p>
                <p className="text-[56px] font-[700]"> Wicked </p>
                <p className="text-[38px] font-[600] flex items-center gap-[8px]"> <Star /> 6.9/10 </p>
                <p className="text-[18px] font-[400] mt-[20px]"> Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.  </p>
                <button className="bg-white text-black flex justify-center items-center gap-[10px] h-[40px] w-[145px] rounded-md mt-[20px] cursor-pointer hover:opacity-[75%]"> <PlayButton /> Watch trailer </button>
            </div>
            <button className="bg-white w-[40px] h-[40px] rounded-[100%] flex justify-center items-center cursor-pointer mr-[80px]"> <RightVector /> </button>
        </div>
    );
}