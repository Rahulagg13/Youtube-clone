import { CheckCircle2, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "./ui/button";
import { PiShareFatLight } from "react-icons/pi";
const WatchVideo = () => {
  return (
    <div className=" flex flex-col gap-2 ">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="border rounded-xl h-[545px] w-[1000px] "
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      />
      <div className="flex flex-col gap-3">
        <p className="text-lg tracking-wide font-semibold">
          How To Create The YouTube Home Page With Tailwind, React, and
          TypeScript
        </p>
        <div className="flex items-center justify-between">
          {/* subscribe part & channelName */}
          <div className="flex gap-4">
            <img
              src="https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s88-c-k-c0x00ffffff-no-rj"
              alt=""
              className="rounded-full border w-11 h-11"
            />
            <div className="flex flex-col items-start ">
              <p className="flex items-center gap-2 font-bold text-base">
                Web Dev Simplified
                <span>
                  <CheckCircle2 size={14} />
                </span>
              </p>
              <p className="text-xs">1.45M subscribers</p>
            </div>
            <Button className="rounded-full ">Subscribe</Button>
          </div>
          {/* likes */}
          <div className="flex items-center gap-4 justify-center">
            <div className="flex divide-x divide-gray-300 items-center  text-sm bg-gray-200 rounded-full  ">
              <p className="flex items-center rounded-l-full px-3 gap-2 py-[7px] bg-gray-200 active:bg-gray-300">
                1.4k
                <span>
                  <ThumbsUp strokeWidth={0.5} size={20} />
                </span>
              </p>
              <p className="px-4  py-[7px] rounded-r-full bg-gray-200 active:bg-gray-300">
                <ThumbsDown strokeWidth={0.5} size={20} />
              </p>
            </div>
            <div className="border text-sm rounded-full px-4 py-[7px] bg-gray-200 active:bg-gray-300">
              <p className="flex items-center gap-2">
                <span>
                  <PiShareFatLight size={20} />
                </span>
                Share
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
