import WatchVideo from "@/components/WatchVideo";
import RecommendedVideo from "@/components/RecommendedVideo";
const WatchPage = () => {
  return (
    <div className=" px-7 flex w-full gap-4 ">
      <WatchVideo />
      <RecommendedVideo />
    </div>
  );
};

export default WatchPage;
