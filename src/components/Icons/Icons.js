import React from "react";
import styled from "styled-components";
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardReturn
} from "@material-ui/icons";

function DefaultIcon(props) {
  const {} = props;
  return <IconWrapper {...props}>{props.children}</IconWrapper>;
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

const IconWrapper = styled.span`
  /* background-color: ${props => props.bgColor || "#fff"}; */
  border-radius: ${props => props.borderRadius || 0};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  box-shadow: #dddddd 0 6px 6px -6px inset;
  cursor: ${props => (props.onClick && !props.disabled ? "pointer" : "")};
`;
