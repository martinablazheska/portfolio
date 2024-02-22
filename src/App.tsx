import { useWindowSize } from "@uidotdev/usehooks";

import Header from "./components/Header/Header";
import HeaderDrawer from "./components/Header/HeaderDrawer";
import Main from "./components/Home/Main";
function App() {
  const size = useWindowSize();
  return (
    <>
      {(size.width as number) > 700 ? <Header /> : <HeaderDrawer />}
      <Main />
    </>
  );
}

export default App;
