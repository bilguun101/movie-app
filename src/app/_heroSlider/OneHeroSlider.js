import { Star } from "../icon/star";
import { PlayButton } from "../icon/playButton";
import { RightVector } from "../icon/rightVector";
import { LeftVector } from "../icon/leftVector";

export const OneHeroSlider = (props) => {

    const { image, name, text, rating, addNextButton, addBackButton, index, total } = props;

    return (
        <div className="w-full h-[600px] mt-[36px] mb-[-20px] relative flex items-center justify-between">

            <img className="w-[100%] h-[100%] object-cover absolute z-[-1]" src={image} alt="" />

            {index > 0 && <button
                onClick={addBackButton}
                className="bg-white w-[40px] h-[40px] rounded-[100%] flex justify-center items-center cursor-pointer ml-[80px] absolute"> <LeftVector /> </button>}
            <div className="flex flex-col w-[302px] text-white ml-[10.42vw]">
                <p className="text-[16px] font-[400]"> Now Playing: </p>
                <p className="text-[36px] font-[700]"> {name} </p>
                <p className="text-[16px] font-[600] flex items-center gap-[8px]"> <Star /> {rating}/10 </p>
                <p className="text-[14px] font-[400] mt-[20px]"> {text} </p>
                <button className="bg-white text-black flex justify-center items-center gap-[10px] h-[40px] w-[145px] rounded-md mt-[20px] cursor-pointer hover:opacity-[75%]"> <PlayButton /> Watch trailer </button>
            </div>
            {index < total - 1 && <button
                onClick={addNextButton}
                className="bg-white w-[40px] h-[40px] rounded-[100%] flex justify-center items-center cursor-pointer mr-[80px]"> <RightVector /> </button>}
        </div>
    );
}