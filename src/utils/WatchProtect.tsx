import { useEffect, ReactNode } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
const WatchProtect = ({ children }: { children: ReactNode }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");
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

export default WatchProtect;
