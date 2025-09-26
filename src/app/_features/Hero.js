"use client";
import { useState } from "react";
import { HeroSlider } from "../_heroSlider/HeroSlider";


export const Hero = () => {

    const [slider, setSlider] = useState(0);

    const slideNumber = (slider * 100) / 3;

    const handleSlider = () => {
        setSlider(slider + 1);
    }
    const handleReverseSlider = () => {
        setSlider(slider - 1);
    }

    return (
        <div className="w-full overflow-hidden">
            <div
                className="flex w-[300%] transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${slideNumber}%)` }}>
                <HeroSlider
                    image="wicked.png"
                    name="Wicked"
                    text="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
                    rating="6.9"
                    addButton={handleSlider} />

                <HeroSlider
                    image="wicked.png"
                    name="Wicked"
                    text="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
                    rating="6.9"
                    addButton={handleSlider} />

                <HeroSlider
                    image="wicked.png"
                    name="Wicked"
                    text="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
                    rating="6.9" />
            </div>
        </div>
    );
}