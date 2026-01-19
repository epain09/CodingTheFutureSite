import {useState} from "react";
import * as images from "../lib/Images.js";
import AliceCarousel from "react-alice-carousel";

export default function MediaCarousel({mediaItems}) {

    const [itemIndex, setItemIndex] = useState(0);
    const itemsNum = mediaItems.length;

    const goBack = () => {
        console.log("GOING BACK");
        if (itemIndex === 0) {
            setItemIndex(itemsNum-1);
        }
        else {
            setItemIndex(itemIndex-1);
        }
        console.log(itemIndex);
        console.log(mediaItems[itemIndex]);
    }

    const goForward = () => {
        console.log("GOING FORWARDS");
        if (itemIndex === itemsNum-1) {
            setItemIndex(0);
        }
        else {
            setItemIndex(itemIndex+1);
        }
        console.log(itemIndex);
        console.log(mediaItems[itemIndex]);
    }

    // return (
    //   <div className="flex relative">
    //       <button className = "cursor-pointer"
    //               type='button'
    //               onClick={goBack}>
    //           <img src = {images.ARROWS.BACK} alt = 'back arrow'/>
    //       </button>
    //       <div className="h-[75vh] w-[50vw] bg-none flex justify-center">
    //           {mediaItems[itemIndex]}
    //       </div>
    //       <button className = "cursor-pointer"
    //               type='button'
    //               onClick={goForward}>
    //           <img src = {images.ARROWS.FORWARD} alt = 'forward arrow'/>
    //       </button>
    //   </div>
    // );

    return (
            <AliceCarousel mouseTracking infinite items={mediaItems} autoHeight/>
    );

}