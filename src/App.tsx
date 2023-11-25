import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./Page/HomePage"));
const WatchPage = lazy(() => import("./Page/WatchPage"));
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
          <Route path="/watch" element={<WatchPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
