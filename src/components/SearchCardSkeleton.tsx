import { Skeleton } from "./ui/skeleton";
// import { FaCheckCircle } from "reac
const SearchCardSkeleton = () => {
  return (
    <div className="  flex flex-col w-full  md:flex-row items-start gap-2 xs:gap-5 group px-4">
      <Skeleton className="rounded-xl w-[600px] h-[300px] md:h-[220px]" />

      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Skeleton className=" w-[450px] h-[300px] md:h-[30px]" />
          <Skeleton className=" w-[200px] h-[300px] md:h-[30px]" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border" />
          <p className="flex items-center gap-3 text-xs xs:text-sm text-gray-600">
            <Skeleton className=" w-[200px] h-[300px] md:h-[30px]" />
          </p>
        </div>
        <Skeleton className="w-[700px] h-[300px] md:h-[30px]" />
      </div>
    </div>
  );
};

export default SearchCardSkeleton;
