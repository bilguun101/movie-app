import { Star } from "../icon/star";

export const MovieList = (props) => {

    const { image, title, rating } = props;

    return (
        <div>
            <div className="flex flex-wrap justify-between mb-[10px] gap-[12px]">
                <div className="bg-gray-100 w-[230px] h-[450px] rounded-3xl flex flex-col">
                    <img className="w-[100%] rounded-t-3xl hover:brightness-80 duration-300" src={image} />
                    <div className="mt-[10px] ml-[10px]">
                        <p className="flex text-[14px] gap-[8px]"> <Star /> {rating}/10 </p>
                        <p className="text-[18px] font-[400]"> {title} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}