import { useSearchParams } from "react-router-dom";

import { ThumbsUp, ThumbsDown } from "lucide-react";
import { PiShareFatLight } from "react-icons/pi";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import ChannelDetail from "./ChannelDetail";
import { abbreviateNumber } from "js-abbreviation-number";

import CommentBox from "./CommentBox";

const WatchVideo = () => {
  const [stringSlice, setStringSlice] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v") as string;
  const { getVideoDetails, videoDetail } = useFetch();
  const { channelId, title, description } = videoDetail[0]?.snippet || {};
  const { likeCount, commentCount } = videoDetail[0]?.statistics || {};

  useEffect(() => {
    getVideoDetails(videoId);
  }, [getVideoDetails, videoId]);

  return (
    <div className=" flex z-10 relative flex-col gap-2 w-full max-w-7xl 2xl:max-w-[80%] ">
      <iframe
        width={"100%"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="border rounded-xl h-[300px] lg:h-[545px]  2xl:h-[900px] "
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=0"}
      />
      {videoDetail === undefined ? (
        <></>
      ) : (
        //details page
        <>
          <div className="flex flex-col gap-3">
            <p className="text-sm lg:text-lg tracking-wide font-semibold">
              {title}
            </p>
            <div className="flex items-center justify-between">
              {/* subscribe part & channelName */}
              <ChannelDetail channelId={channelId!} />
              {/* likes */}
              <div className="flex flex-col xs:flex-row items-center gap-4 justify-center">
                <div className="flex divide-x divide-gray-300 items-center  text-[10px] lg:text-sm bg-gray-200 rounded-full  ">
                  <p className="flex items-center rounded-l-full px-[9px] lg:px-3 gap-2 py-[2px] lg:py-[7px] bg-gray-200 active:bg-gray-300">
                    {abbreviateNumber(likeCount!)}
                    <span>
                      <ThumbsUp strokeWidth={0.5} size={20} />
                    </span>
                  </p>
                  <p className="px-4  py-[7px] rounded-r-full bg-gray-200 active:bg-gray-300">
                    <ThumbsDown strokeWidth={0.5} size={20} />
                  </p>
                </div>
                <div className="border text-xs lg:text-sm rounded-full px-4 py-[7px] bg-gray-200 active:bg-gray-300">
                  <p className="flex items-center gap-2">
                    <span>
                      <PiShareFatLight size={20} />
                    </span>
                    Share
                  </p>
                </div>
              </div>
            </div>

            {/* Description box */}

            {stringSlice ? (
              <div className=" mt-4 border p-4  text-sm lg:text-base bg-gray-200 rounded-xl font-medium">
                <p> {description?.slice(0, 325)}</p>

                <button
                  onClick={() => setStringSlice((ele) => !ele)}
                  className="text-gray-600"
                >
                  show more
                </button>
              </div>
            ) : (
              <div className=" mt-4 border p-4 text-sm lg:text-base bg-gray-200 rounded-xl font-medium">
                <p>{description}</p>
                <button
                  onClick={() => setStringSlice((ele) => !ele)}
                  className="text-gray-600"
                >
                  show less
                </button>
              </div>
            )}
          </div>

          {/* Comment box */}
          <CommentBox commentCount={commentCount!} videoId={videoId} />
        </>
      )}
    </div>
  );
};

export default WatchVideo;
