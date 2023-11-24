import { useState } from "react";
const buttonName: string[] = [
  "All",
  "Gaming",
  "JavaScript",
  "Python",
  "Nextjs",
  "C++",
  "ReactJs",
];

const Categories = () => {
  const [selected, setSelected] = useState<string>(buttonName[0]);
  return (
    <div className="overflow-y-auto  pb-2   w-full flex  items-center whitespace-nowrap hide-Scrollbar  gap-2 md:gap-4 text-xs md:text-sm font-medium  ">
      {buttonName.map((category: string): JSX.Element => {
        return (
          <button
            key={category}
            className={` ${
              selected === category
                ? "bg-[#0e1010] text-white px-2 py-[5px] md:px-4 md:py-2"
                : "bg-[#f3f3f3] text-[#100e0e] px-3 py-2"
            }   rounded-lg`}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
