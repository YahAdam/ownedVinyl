import React from "react";
import * as icons from "../../assets/index";

const BaseIcon = ({ iconName, props }) => {
  function getIcon() {
    const Icon = icons[iconName];
    return <Icon {...props} />;
  }
  return <div>{getIcon()}</div>;
};

export default BaseIcon;
