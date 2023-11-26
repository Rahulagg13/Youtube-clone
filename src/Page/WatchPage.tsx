import WatchVideo from "@/components/WatchVideo";
import RecommendedVideo from "@/components/RecommendedVideo";

import SideBarComponent from "@/components/SideBarComponent";

type prop = {
  sideDrawer: boolean;
};

const WatchPage = ({ sideDrawer }: prop): JSX.Element => {
  return (
    <div className=" px-2 lg:px-7 flex w-full gap-4 overflow-x-hidden ">
      {sideDrawer ? (
        <div className="z-50 absolute">
          <SideBarComponent />
        </div>
      ) : (
        <></>
      )}

      <WatchVideo />
      <RecommendedVideo />
    </div>
  );
};

export default WatchPage;
