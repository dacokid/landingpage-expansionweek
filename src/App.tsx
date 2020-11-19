import React from "react";

import Header from "./pages/Header";
import Description from "./pages/Description";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Description />
      <Footer />
    </>
  );
}

export default App;
