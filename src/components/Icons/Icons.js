import React from 'react';
import styled from 'styled-components';
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardReturn,
  LabelImportant,
  Edit,
  Settings
} from '@material-ui/icons';
import { SvgIcon } from '@material-ui/core';

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
    debugger;
    return (
      <DefaultIcon {...restProps}>
        <IconComponent fontSize={'18px'} {...iconProps} />
      </DefaultIcon>
    );
  };
}

function generateFromSvgUrl(SVG) {
  return props => {
    const { iconProps = {}, fontSize, color, style, ...restProps } = props;
    return (
      <DefaultIcon {...restProps}>
        <SvgIcon style={{ fontSize, color, ...style }} {...iconProps}>
          <SVG />
        </SvgIcon>
      </DefaultIcon>
    );
  };
}

export const ArrowBackIosIcon = generateIcon(ArrowBackIos);
export const ArrowForwardIosIcon = generateIcon(ArrowForwardIos);
export const KeyboardReturnIcon = generateIcon(KeyboardReturn);
export const LabelImportantIcon = generateIcon(LabelImportant);
export const EditIcon = generateIcon(Edit);
export const SettingsIcon = generateIcon(Settings);

const IconWrapper = styled.span`
  opacity: ${props => (props.onClick && !props.disabled ? 1 : 0.3)};
  cursor: ${props => (props.onClick && !props.disabled ? 'pointer' : '')};
  &:hover {
    opacity: 0.7;
  }
`;
