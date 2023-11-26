import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Loader from "./components/Loader";
import SearchProtect from "./utils/SearchProtect";
import WatchProtect from "./utils/WatchProtect";

const HomePage = lazy(() => import("./Page/HomePage"));
const WatchPage = lazy(() => import("./Page/WatchPage"));
const SearchPage = lazy(() => import("./Page/SearchPage"));
const ErrorPage = lazy(() => import("./Page/ErrorPage"));

function App() {
  const [sideDrawer, setSideDrawer] = useState<boolean>(false);
  const [screen, setScreen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Header
        setSideDrawer={setSideDrawer}
        screen={screen}
        setScreen={setScreen}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage sideDrawer={sideDrawer} />} />
          <Route
            path="/watch"
            element={
              <WatchProtect>
                <WatchPage sideDrawer={sideDrawer} />
              </WatchProtect>
            }
          />
          <Route
            path="/result"
            element={
              <SearchProtect>
                <SearchPage sideDrawer={sideDrawer} />
              </SearchProtect>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
