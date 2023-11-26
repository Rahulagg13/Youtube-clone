import { Link, useSearchParams } from "react-router-dom";

import SearchCard from "./SearchCard";
import SearchCardSkeleton from "./SearchCardSkeleton";
import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
const SearchContainer = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_result");

  const { getSearchResult, searchResult } = useFetch();

  useEffect(() => {
    getSearchResult(query!);
  }, [getSearchResult, query]);

  return (
    <div className="mt-6 space-y-8">
      {searchResult === undefined ? (
        <>
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
          <SearchCardSkeleton />
        </>
      ) : (
        <>
          {searchResult.map((result) => (
            <Link
              to={`/watch?v=${result?.id.videoId}`}
              key={result.etag + result.id.videoId}
            >
              <SearchCard info={result} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default SearchContainer;
