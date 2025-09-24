import { RightArrow } from "../icon/rightArrow";
import { Star } from "../icon/star";

export const MovieList = (props) => {

    const { leftText, image, innerText } = props;

    return (
        <div>
            <div className="flex justify-between ml-[120px] mr-[120px] mt-[100px]">
                <p className="text-[36px] font-[600]"> {leftText} </p>
                <button className="flex justify-center items-center gap-[8px] text-[20px] cursor-pointer"> See more  <RightArrow /> </button>
            </div>
            <div className="flex flex-wrap justify-between ml-[120px] mr-[120px] mt-[40px] gap-[60px]">
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[350px] h-[650px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[18px] gap-[8px]"> <Star /> 6.9/10 </p>
                        <p className="text-[25px] font-[400]"> {innerText} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}