import { RightArrow } from "../icon/rightArrow";

export const MovieUpperText = (props) => {

    const { leftText } = props;

    return (
        <div>
            <div className="flex justify-between ml-[120px] mr-[120px] mt-[100px]">
                <p className="text-[36px] font-[600]"> {leftText} </p>
                <button className="flex justify-center items-center gap-[8px] text-[20px] cursor-pointer"> See more  <RightArrow /> </button>
            </div>
        </div>
    );
}