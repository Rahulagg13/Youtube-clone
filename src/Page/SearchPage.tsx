import SideBar from "@/components/SideBar";
import Categories from "@/components/Categories";
import { SlidersHorizontal } from "lucide-react";
import SearchContainer from "@/components/SearchContainer";
type prop = {
  sideDrawer: boolean;
};
const SearchPage = ({ sideDrawer }: prop): JSX.Element => {

  return (
    <div className="flex gap-2 ">
      <SideBar sideDrawer={sideDrawer} />
      <div className=" ml-10 w-full  flex flex-col overflow-hidden ">
        <div className="flex items-center  gap-4 w-full ">
          <Categories />
          <button className="flex mr-10 gap-5 items-center px-4 py-2 hover:bg-gray-200 rounded-full">
            <span>
              <SlidersHorizontal />
            </span>
            Filters
          </button>
        </div>
        <SearchContainer />
      </div>
    </div>
  );
};

export default SearchPage;
