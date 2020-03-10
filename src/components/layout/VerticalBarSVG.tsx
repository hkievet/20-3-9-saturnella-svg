import * as React from "react";
import { ReactComponent as Hearts } from "../../assets/bad_heart_vertical_pattern.svg";
import styled, { css } from "styled-components";
import { Keys } from "../hksvg/WeirdRotateAnimation";
import collection from "../hksvg/SvgCollection";

const animationProperty = css`
  animation: ${Keys} 2s linear infinite;
`;

const animationPropertyReverse = css`
  animation: ${Keys} 2s linear infinite;
  animation-direction: reverse;
`;

export interface IVerticalBarSVGProps {
  reversed?: boolean;
  animated?: boolean;
  component: React.FC<any>;
}

export interface IVerticalBarWrapper {
  reversed?: boolean;
  animated?: boolean;
}

const VerticalBarWrapper = styled.div<IVerticalBarWrapper>`
  display: flex;
  width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
  ${props => {
    if (props.animated) {
      if (props?.reversed) {
        return animationProperty;
      } else {
        return animationPropertyReverse;
      }
    }
  }};
  path {
    stroke: white;
  }
`;

export const VerticalBarSVG: React.FC<IVerticalBarSVGProps> = props => {
  const { reversed = false, animated = false } = props;
  return (
    <VerticalBarWrapper reversed={reversed} animated={animated}>
      <props.component reversed={reversed} />
    </VerticalBarWrapper>
  );
};

export default VerticalBarSVG;
