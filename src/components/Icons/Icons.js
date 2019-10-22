import React from "react";
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardReturn
} from "@material-ui/icons";

function DefaultIcon(props) {
  return props.children;
}
function generateIcon(IconComponent) {
  return props => {
    const { iconProps = {}, ...restProps } = props;
    return (
      <DefaultIcon {...restProps}>
        <IconComponent fontSize={"inherit"} {...iconProps} />
      </DefaultIcon>
    );
  };
}

export const ArrowBackIosIcon = generateIcon(ArrowBackIos);
export const ArrowForwardIosIcon = generateIcon(ArrowForwardIos);
export const KeyboardReturnIcon = generateIcon(KeyboardReturn);
