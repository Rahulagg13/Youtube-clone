import Categories from "./Categories";
import RecommendedCard from "./RecommendedCard";
const RecommendedVideo = () => {
  return (
    <div className=" w-full space-y-8 overflow-auto">
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
