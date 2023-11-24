import { useCallback, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../utils/Card";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingUi from "./LoadingUi";

const VideoContainer = () => {
  const { getVideos, allVideos, scrolledDown, setScrollDown } = useFetch();

  useEffect(() => {
    getVideos();
  }, [getVideos, scrolledDown]);
  // Infinite Scroll
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1500 >=
      document.documentElement.offsetHeight
    ) {
      setScrollDown(true);
    }
    return;
  }, [setScrollDown]);

  // Enabling Infinite Scroll by calculating the width
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  console.log(allVideos);
  return (
    // <div className="grid h-screen xl:grid-cols-3 grid-cols-1 border w-full  hide-Scrollbar ">
    //
    // </div>
    <div className="flex flex-wrap gap-8   md:justify-around justify-center mr-2 hide-Scrollbar ">
      {allVideos === undefined ? (
        <LoadingUi />
      ) : (
        allVideos?.items?.map((info: Item) => {
          return <Card key={info.etag} info={info} />;
        })
      )}
    </div>
  );
};

export default VideoContainer;
