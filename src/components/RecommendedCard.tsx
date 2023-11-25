import React from "react";

const RecommendedCard = () => {
  return (
    <div className=" flex items-start gap-2 hover:bg-gray-200 rounded-xl p-2">
      <img
        src="https://i.ytimg.com/vi/31k6AtW-b3Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCA-vRibffrocxT0_J15FK3IsfveA"
        className="border w-36 rounded-xl"
      ></img>

      <div className="flex flex-col gap-1">
        <p className="text-base">Docker In One Shot - Part 1</p>
        <div className="text-xs">
          <p>Piyush Garg</p>
          <div className="flex item-center space-x-1">
            <p className="flex items-center justify-center">29k Views</p>
            <p className="before:content-['•']"> 1 months ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;
