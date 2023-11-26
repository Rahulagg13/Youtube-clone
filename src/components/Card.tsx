import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { abbreviateNumber } from "js-abbreviation-number";
import PublishedDate from "@/utils/PublishedDate";
type prop = {
  info: Item;
};

const Card = ({ info }: prop): JSX.Element => {
  const { getSingleVideo, video } = useFetch();
  const { snippet, statistics } = info;
  const { title, channelId, channelTitle, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;

  const { snippet: ChannelSnippet } = video[0] || [];
  const { thumbnails: ChannelThumbnails } = ChannelSnippet || {};

  useEffect(() => {
    getSingleVideo(channelId!);
  }, [getSingleVideo, channelId]);

  return (
    <div className=" mt-8 w-[350px] ">
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="rounded-xl w-full "
      />
      <div className="flex gap-4 mt-4">
        <img
          src={ChannelThumbnails?.high?.url}
          className="rounded-full w-10 h-10 "
        />
        <div className="text-sm space-y-2">
          <p>{title}</p>
          <div>
            <p className="flex items-center gap-2">
              {channelTitle}
              <span>
                <FaCheckCircle size={12} />
              </span>
            </p>
            <div className="flex item-center space-x-1">
              <p className="flex items-center justify-center">
                {abbreviateNumber(viewCount)} Views
              </p>
              <p className="before:content-['•']">
                {PublishedDate(publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
