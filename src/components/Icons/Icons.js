import React from "react";
import styled from "styled-components";
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardReturn
} from "@material-ui/icons";

function DefaultIcon(props) {
  const { disabled, onClick, ...rest } = props;
  return (
    <IconWrapper onClick={!disabled ? onClick : null} {...rest}>
      {props.children}
    </IconWrapper>
  );
}
function generateIcon(IconComponent) {
  return props => {
    const { iconProps = {}, ...restProps } = props;
    return (
      <DefaultIcon {...restProps}>
        <IconComponent fontSize={"18px"} {...iconProps} />
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
  opacity: ${props => (props.onClick && !props.disabled ? 1 : 0.3)};
  box-shadow: #dddddd 0 6px 6px -6px inset;
  cursor: ${props => (props.onClick && !props.disabled ? "pointer" : "")};
  &:hover{
    opacity: 0.8;
  }
`;
