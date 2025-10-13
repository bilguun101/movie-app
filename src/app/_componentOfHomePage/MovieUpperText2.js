import { RightArrow } from "../icon/rightArrow";

export const MovieUpperText2 = (props) => {

    const { leftText, onClick } = props;

    return (
        <div>
            <div className="flex justify-start ml-[120px] mr-[120px] mt-[100px]">
                <p className="text-[36px] font-[600]"> {leftText} </p>
            </div>
        </div>
    );
}