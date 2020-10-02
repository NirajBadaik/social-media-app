import React from "react";
import ReactDOM from "react-dom";

const NewComponent = () => {
  return (
    <>
      <h1>Thanks for visiting!!!!</h1>
    </>
  );
};

export default NewComponent;
ReactDOM.render(<NewComponent />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
