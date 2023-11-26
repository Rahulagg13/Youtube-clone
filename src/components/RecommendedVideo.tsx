import Categories from "./Categories";
import RecommendedCard from "./RecommendedCard";
const RecommendedVideo = () => {
  return (
    <div className=" hidden lg:block w-full lg:max-w-[30%] xl:max-w-[25%] 2xl:max-w-[20%] space-y-4 ml-2 mt-2 overflow-auto">
      <Categories />
      <div>
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
      </div>
    </div>
  );
};

export default RecommendedVideo;
