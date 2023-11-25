import {
  userFunction,
  General,
  GeneralSetting,
  Explore,
  Subscription,
  GeneralFront,
  FeaturesList,
  TermAndCondition,
} from "../utils/SideBarComponent";
import { UserCircle2, ChevronRight } from "lucide-react";

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
        <div className=" sticky top-0 overflow-y-auto  w-36 md:w-72  mt-[-10px]   divide-y">
          <ul className="  w-full px-2 md:px-4">
            {General.map((category) => {
              return (
                <li
                  key={category.componentName}
                  className="flex rounded-md text-[8px] gap-2 md:gap-8 md:text-[15px] items-center  py-3  hover:bg-gray-200 active:bg-gray-300"
                >
                  <span>
                    <category.icon size={22} />
                  </span>
                  {category.componentName}
                </li>
              );
            })}
          </ul>

          <ul className=" w-full px-2 md:px-4 ">
            <li className="flex rounded-md text-[10px] gap-2 md:gap-8 md:text-[15px] items-center  py-2  hover:bg-gray-200 active:bg-gray-300">
              You
              <span>
                <ChevronRight size={20} />
              </span>
            </li>
            {userFunction.map((category) => {
              return (
                <li
                  key={category.componentName}
                  className="flex rounded-md text-[8px] gap-2 md:gap-8 md:text-[15px] items-center  py-2  hover:bg-gray-200 active:bg-gray-300"
                >
                  <span>
                    <category.icon size={20} />
                  </span>
                  {category.componentName}
                </li>
              );
            })}
          </ul>

          <ul className="  w-full px-2 md:px-4 ">
            {Subscription.length ? (
              Subscription.map((category) => {
                return (
                  <li
                    key={category.componentName}
                    className="flex rounded-md gap-6 text-[15px] items-center px-4 py-3  hover:bg-gray-200 active:bg-gray-300"
                  >
                    <span>
                      <category.icon size={20} />
                    </span>
                    {category.componentName}
                  </li>
                );
              })
            ) : (
              <div className=" text-[8px] md:text-sm  space-y-3 flex  flex-col items-start px-2 py-2 md:px-4 md:py-4">
                <p>Sign in to like videos, comment, and subscribe.</p>
                <button className="px-2 md:px-4 md:py-2 text-blue-500 flex items-center gap-1 md:gap-3 border rounded-full">
                  <span>
                    <UserCircle2 strokeWidth={1} />
                  </span>
                  Sign in
                </button>
              </div>
            )}
          </ul>

          <ul className=" w-full px-2 md:px-4">
            <h4 className="font-bold text-[11px] md:text-[16px] mt-2 mb-1">
              Explore
            </h4>
            {Explore.map((category) => {
              return (
                <li
                  key={category.componentName}
                  className="flex rounded-md text-[8px] gap-2 md:gap-8 md:text-[15px] items-center  py-3  hover:bg-gray-200 active:bg-gray-300"
                >
                  <span>
                    <category.icon size={20} />
                  </span>
                  {category.componentName}
                </li>
              );
            })}
          </ul>

          <ul className="  w-full px-2 md:px-4 ">
            {GeneralSetting.map((category) => {
              return (
                <li
                  key={category.componentName}
                  className="flex rounded-md text-[8px] gap-2 md:gap-8 md:text-[15px] items-center py-3  hover:bg-gray-200 active:bg-gray-300"
                >
                  <span>
                    <category.icon size={20} />
                  </span>
                  {category.componentName}
                </li>
              );
            })}
          </ul>

          <div className="text-[8px] md:text-xs tracking-wide pt-3 px-2 md:px-5 space-y-3 ">
            <ul className="flex text-[7px] md:text-[12px] flex-wrap md:gap-2 items-start   py-2 font-bold text-[#6c6c6c]">
              {FeaturesList.map((feature: string) => {
                return (
                  <li key={feature} className="">
                    {feature}
                  </li>
                );
              })}
            </ul>
            <ul className="flex text-[7px] md:text-[12px] flex-wrap md:gap-2 items-center justify-start   font-bold text-[#6c6c6c]">
              {TermAndCondition.map((feature: string) => {
                return (
                  <li key={feature} className="">
                    {feature}
                  </li>
                );
              })}
            </ul>
            <p className="">© 2023 Google LLC</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
