import { GeneralFront } from "../utils/SideBarComponent";
import SideBarComponent from "./SideBarComponent";
type prop = {
  sideDrawer: boolean;
};

const SideBar = ({ sideDrawer }: prop): JSX.Element => {
  return (
    <>
      {sideDrawer ? (
        <div className="   px-px text-[7px] md:text-[10px] font-base 2xl:text-[15px]">
          <ul className=" ">
            {GeneralFront.map((tag) => {
              return (
                <li
                  key={tag.componentName}
                  className=" flex flex-col items-center py-4 rounded-lg hover:bg-gray-200"
                >
                  <span className="mb-2">
                    <tag.icon size={22} />
                  </span>
                  {tag.componentName}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <SideBarComponent />
      )}
    </>
  );
};

export default SideBar;
