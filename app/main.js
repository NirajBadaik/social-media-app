import React from "react";
import ReactDOM from "react-dom";

const NewComponent = () => {
  return (
    <>
      <h1>Thanks for visiting!!!!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        corrupti consequatur libero unde fuga officia aspernatur, enim nesciunt
        blanditiis sint.
      </p>
    </>
  );
};

export default NewComponent;
ReactDOM.render(<NewComponent />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
