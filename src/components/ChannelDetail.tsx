import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { abbreviateNumber } from "js-abbreviation-number";
type prop = {
  channelId: string;
};

const ChannelDetail = ({ channelId }: prop) => {
  const { getSingleVideo, video } = useFetch();
  useEffect(() => {
    getSingleVideo(channelId);
  }, [getSingleVideo, channelId]);

  if (video === undefined) return null;
  const { snippet, statistics } = video[0] || [];
  const { title, thumbnails } = snippet || {};
  const { subscriberCount } = statistics || {};

  return video === undefined ? (
    <>
      <p className="text-center text-xl">Error</p>
    </>
  ) : (
    <div className="flex items-center gap-2 lg:gap-4">
      <img
        src={thumbnails?.high?.url}
        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
      />
      <div className="flex flex-col items-start ">
        <p className="flex items-center gap-2 font-bold text-xs lg:text-base">
          {title}
          <span>
            <CheckCircle2 size={14} />
          </span>
        </p>
        <p className=" text-[8px] md:text-xs">
          {abbreviateNumber(subscriberCount!)}
          subscribers
        </p>
      </div>
      <Button className="rounded-full text-[10px] lg:text-base ">
        Subscribe
      </Button>
    </div>
  );
};

export default ChannelDetail;
