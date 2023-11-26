import { FaCheckCircle } from "react-icons/fa";
import { MoreVertical } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import PublishedDate from "@/utils/PublishedDate";
import { Skeleton } from "./ui/skeleton";
type prop = {
  info: SearchItem;
};

const SearchCard = ({ info }: prop) => {
  const { getSingleVideo, video } = useFetch();
  const { snippet } = info || {};
  const {
    thumbnails,
    title,
    publishedAt,
    description,
    channelTitle,
    channelId,
  } = snippet;
  useEffect(() => {
    getSingleVideo(channelId!);
  }, [getSingleVideo, channelId]);

  return (
    <div className=" pb-4  flex flex-col md:flex-row gap-4  items-start  group px-4">
        <img src={thumbnails.medium.url} className="  md:w-60 lg:w-96 md:h-52 h-full rounded-xl" />

      <div className="flex  flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <p className=" xs:text-base sm:text-lg lg:text-xl">{title}</p>
          <div className="flex item-center text-[10px] xs:text-xs space-x-1">
            <p className="flex items-center justify-center">29k Views</p>
            <p className="before:content-['•']">{PublishedDate(publishedAt)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {video === undefined ? (
            <Skeleton className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border" />
          ) : (
            <img
              src={video[0]?.snippet.thumbnails.high.url}
              alt=""
              className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border"
            />
          )}
          <p className="flex items-center gap-3 text-xs xs:text-sm text-gray-600">
            {channelTitle}
            <span>
              <FaCheckCircle />
            </span>
          </p>
        </div>
        <p className="text-[8px] xs:text-xs  mr-10 ">{description}</p>
      </div>

      <MoreVertical className="hidden group-hover:block cursor-pointer" />
    </div>
  );
};

export default SearchCard;
