import * as React from "react";
import { ReactComponent as Hearts } from "../../assets/bad_heart_vertical_pattern.svg";
import styled, { css } from "styled-components";
import { Keys } from "../hksvg/WeirdRotateAnimation";
import collection from "../hksvg/SvgCollection";

interface IVerticalBarSVG {
  isReversed: boolean;
}

const VerticalBarWrapper = styled.div<IVerticalBarSVG>`
  display: flex;
  max-width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
  path {
    stroke: white;
  }
  ${props => (props.isReversed ? "transform: scaleX(-1)" : "")}
`;

export const VerticalBarSVG: React.FC<IVerticalBarSVG> = props => {
  return <VerticalBarWrapper {...props}>{props.children}</VerticalBarWrapper>;
};

export default VerticalBarSVG;
