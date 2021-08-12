import React from "react";
import PropTypes from "prop-types";

const ActionLink = () => {
  const HandleName = () => {
    alert("It's Smoky ");
  };
  return (
    <a
      href="/"
      onClick={HandleName}
      style={{
        display: "flex",
        justifyContent: "center",
        
      }}
    >
      Guess Who's Back !
    </a>
  );
};
ActionLink.propTypes = {
  HandleName: PropTypes.func
};

export default ActionLink;