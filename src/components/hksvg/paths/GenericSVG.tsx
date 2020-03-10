import * as React from "react";
import styled from "styled-components";

export interface ISVGProps {
  reversed?: boolean;
}

export const GenericSVG = styled.svg<ISVGProps>`
  width: 100%;
  height: 100%;
  height: 100%;
  ${props => {
    if (props?.reversed) {
      return "transform: scaleX(-1)";
    }
  }};
`;

export default GenericSVG;
