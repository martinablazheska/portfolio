import ScrollContextProvider from "./context/scroll-context";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <ScrollContextProvider>
      <Header />
      <Home />
    </ScrollContextProvider>
  );
}

export default App;
