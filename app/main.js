import React from "react";
import ReactDOM from "react-dom";

//my components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
const NewComponent = () => {
  return (
    <>
      <Header />
      <HomeGuest />
      <Footer />
    </>
  );
};

export default NewComponent;
ReactDOM.render(<NewComponent />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
