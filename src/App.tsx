import { useWindowSize } from "@uidotdev/usehooks";

import Header from "./components/Header/Header";
import HeaderDrawer from "./components/Header/HeaderDrawer";
import Home from "./components/Home/Home";

function App() {
  const size = useWindowSize();
  return (
    <>
      {(size.width as number) > 700 ? <Header /> : <HeaderDrawer />}
      <Home />
    </>
  );
}

export default App;
