import React from "react";
import TransparentSpinner from "./TransparentSpinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={TransparentSpinner}
        width={"100px"}
        height={"100px"}
        alt="loading"
      />
    </div>
  );
};

export default Spinner ;
