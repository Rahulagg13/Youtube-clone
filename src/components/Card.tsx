import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { abbreviateNumber } from "js-abbreviation-number";

type prop = {
  info: Item;
};

const publishedDate = (date: string): string => {
  const newDate = new Date();
  const publishedDate = new Date(date);

  const secValue = newDate.getSeconds() - publishedDate.getSeconds();
  const minValue = newDate.getMinutes() - publishedDate.getMinutes();
  const hoursValue = newDate.getHours() - publishedDate.getHours();
  const dateValue = newDate.getDate() - publishedDate.getDate();
  const monthValue = newDate.getMonth() - publishedDate.getMonth();
  const yearValue = newDate.getFullYear() - publishedDate.getFullYear();

  if (
    yearValue === 0 &&
    monthValue === 0 &&
    dateValue === 0 &&
    hoursValue === 0 &&
    minValue < 1
  ) {
    return ` ${secValue} secs ago`;
  } else if (
    yearValue === 0 &&
    monthValue === 0 &&
    dateValue === 0 &&
    hoursValue < 1
  ) {
    return ` ${minValue} min ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue < 1) {
    return ` ${hoursValue} hours ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue === 1) {
    return ` ${dateValue} day ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue < 7) {
    return ` ${dateValue} days ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue >= 7) {
    const weeks = Math.floor(dateValue / 7);
    return ` ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (yearValue === 0 && monthValue < 1) {
    return ` ${monthValue === 0 ? "this month" : monthValue} month${
      monthValue !== 1 ? "s" : ""
    } ago`;
  } else if (yearValue === 0) {
    return ` ${monthValue} month${monthValue !== 1 ? "s" : ""} ago`;
  } else if (yearValue === 1) {
    return " last year";
  } else {
    return `${yearValue} years ago`;
  }
};

const Card = ({ info }: prop): JSX.Element => {
  const { getSingleVideo, video } = useFetch();
  const { snippet, statistics } = info;
  const { title, channelId, channelTitle, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;

  useEffect(() => {
    getSingleVideo(channelId as string);
  }, [getSingleVideo, channelId]);

  return (
    <div className=" mt-8 w-[350px] ">
      <img src={thumbnails?.medium?.url} alt={title} className="rounded-xl w-full " />
      <div className="flex gap-4 mt-4">
        <img
          src={video?.items[0].snippet.thumbnails.high.url}
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
                {publishedDate(publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
