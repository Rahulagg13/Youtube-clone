import SideBar from "../components/SideBar";
import Categories from "../components/Categories";
import VideoContainer from "../components/VideoContainer";

type prop = {
  sideDrawer: boolean;
};
const HomePage = ({ sideDrawer }: prop): JSX.Element => {
  return (
    <div className="flex  gap-2 ">
      <SideBar sideDrawer={sideDrawer} />
      <div className=" top-0  w-full ">
        <Categories />
        <VideoContainer />
      </div>
    </div>
  );
};

export default HomePage;
