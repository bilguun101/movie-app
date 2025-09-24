import { BottomLogo } from "../icon/bottomLogo";
import { MailIcon } from "../icon/mailIcon";
import { Phone } from "../icon/phone";

export const Footer = () => {
    return (
        <div className="bg-indigo-700 w-[100%] h-[350px] mt-[90px] text-white flex justify-between pl-[150px] pr-[200px] pt-[60px]">
            <div className="flex flex-col gap-[20px]">
                <BottomLogo />
                <p className="text-[18px] font-[400]"> © 2024 Movie Z. All Rights Reserved. </p>
            </div>
            <div className="flex gap-[100px]">
                <div className="flex flex-col gap-[20px]">
                    <p className="text-white"> Contact Information </p>
                    <div className="flex items-center gap-[15px]">
                        <MailIcon />
                        <div className="flex flex-col">
                            <p> Email: </p>
                            <p> support@movieZ.com </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px]">
                        <Phone />
                        <div className="flex flex-col">
                            <p> Phone: </p>
                            <p> +976 (11) 123-4567 </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <p> Follow us </p>
                    <div className="flex gap-[10px]">
                        <a href="#"> Facebook </a>
                        <a href="#"> Instagram </a>
                        <a href="#"> Twitter </a>
                        <a href="#"> Youtube </a>
                    </div>
                </div>
            </div>
        </div>
    );
}