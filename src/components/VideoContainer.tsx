import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import LoadingUi from "./LoadingUi";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  const { getVideos, allVideos } = useFetch();

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return (
    <InfiniteScroll
      dataLength={allVideos.length}
      loader={<LoadingUi />}
      hasMore={true}
      next={getVideos}
    >
      <div
        className="flex flex-wrap cursor-pointer  overflow-y-auto  md:justify-around justify-center mr-2 "
      >
        {allVideos === undefined ? (
          <LoadingUi />
        ) : (
          allVideos?.map((info: Item, index: number) => {
            return (
              <Link
                key={info.etag + info.id + index}
                to={`/watch?v=${info.id}`}
              >
                <Card info={info} />
              </Link>
            );
          })
        )}
      </div>
    </InfiniteScroll>
  );
};

export default VideoContainer;
