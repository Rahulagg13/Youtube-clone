import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./Page/HomePage";

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
      <Routes>
        <Route path="/" element={<HomePage sideDrawer={sideDrawer} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
