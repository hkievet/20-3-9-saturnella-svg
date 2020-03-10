import * as React from "react";
import styled, { css } from "styled-components";
import { Keys } from "../WeirdRotateAnimation";

const animationProperty = css`
  animation: ${Keys} 2s linear infinite;
`;

const animationPropertyReverse = css`
  animation: ${Keys} 2s linear infinite;
  animation-direction: reverse;
`;

export interface ISVGProps {
  reversed?: boolean;
  animated?: boolean;
}

export const GenericSVG = styled.svg<ISVGProps>`
  height: 100%;
  svg {
    ${props => {
      if (props?.reversed) {
        return "transform: scaleX(-1)";
      }
    }};
  }
  ${props => {
    console.log(props);
    if (props.animated) {
      if (props?.reversed) {
        return animationProperty;
      } else {
        return animationPropertyReverse;
      }
    }
  }};
`;

export default GenericSVG;
