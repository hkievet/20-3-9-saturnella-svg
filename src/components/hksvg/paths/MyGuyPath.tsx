import * as React from "react";
import styled from "styled-components";
import GenericSVG from "./GenericSVG";

export interface IMyGuyPathProps {}

export const MyGuyPath: React.FC<IMyGuyPathProps> = props => {
  return (
    <g>
      {" "}
      <path
        d="M10.08,120c-.42-10.85,34.2-3.65,39.55-13.54C54.25,97.91,18.39,88,22.83,80.21c7.63-13.37,42.11,28.71,45.6,22.6C72.62,95.48,40.69,68,44.49,61.35c4.64-8.12,10.37-15.93,13.75-24.08-3.07,7.42,10.19,65.54,23.94,41.47,3.6-6.32,29.64-48.75,21.88-48.82s-23,20.48-31.59,35.52C69.4,70.8,81.36-22.3,51.75,29.56,39,51.87,26.67,30.23,17,30.23c-9.84,0,0,7.45,0,0S1.12-.06,10.08,0"
        transform="translate(-6.85 0.5)"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        d="M73.75,47.7"
        transform="translate(-6.85 0.5)"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <circle
        cx="20.95"
        cy="54.31"
        r="8.64"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
      />
    </g>
  );
};

export interface IMyGuyStillImageProps {}

export const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

export const MyGuyStillImage: React.FC<IMyGuyStillImageProps> = props => {
  return (
    <SVG>
      <MyGuyPath />
    </SVG>
  );
};

export interface IMyGuyPatternProps {
  reversed?: boolean;
  animated?: boolean;
}

export const MyGuyPattern: React.FC<IMyGuyPatternProps> = props => {
  return (
    <GenericSVG reversed={props?.reversed} animated={props.animated}>
      <defs>
        <pattern
          id="puzzle"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <MyGuyPath />
        </pattern>
      </defs>
      <g>
        <rect fill="url(#puzzle)" width="100%" height="100%"></rect>
      </g>
    </GenericSVG>
  );
};
