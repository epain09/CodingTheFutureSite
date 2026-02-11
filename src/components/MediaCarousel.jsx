import {useState} from "react";

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

    return (
      <div className="flex items-center relative h-full">
          <button className = "cursor-pointer h-full"
                  type='button'
                  onClick={goBack}>
              <img src = {"../assets/icons/site/ui/arrow_back.png"} alt = 'back arrow'/>
          </button>
          <div className="w-[80vw] md:w-[50vw] bg-none flex">
              {mediaItems[itemIndex]}
          </div>
          <button className = "cursor-pointer h-full"
                  type='button'
                  onClick={goForward}>
              <img src = {"../assets/icons/site/ui/arrow_forward.png"} alt = 'forward arrow'/>
          </button>
      </div>
    );

}