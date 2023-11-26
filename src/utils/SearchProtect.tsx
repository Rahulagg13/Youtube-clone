import { useEffect, ReactNode } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
const SearchProtect = ({ children }: { children: ReactNode }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_result");
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = () => {
      if (query === null) {
        navigate("/");
      }
    };

    handleNavigation();
  }, [navigate, query]);
  return children;
};

export default SearchProtect;
