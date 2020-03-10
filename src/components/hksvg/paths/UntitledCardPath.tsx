import * as React from "react";
import styled from "styled-components";
import GenericSVG from "./GenericSVG";

export interface IUntitledCardImagePath {}

export const UntitledCardPath: React.FC<IUntitledCardImagePath> = props => {
  return (
    <g>
      <defs>
        <linearGradient
          id="e99e0031-3375-40ba-8396-63bebfafef9a"
          x1="14.85"
          y1="52.05"
          x2="31.05"
          y2="52.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.17" stopColor="#dfe1f0" />
          <stop offset="0.43" stopColor="#b7bcdd" />
          <stop offset="0.65" stopColor="#9ba1d0" />
          <stop offset="0.85" stopColor="#8991c8" />
          <stop offset="1" stopColor="#838bc5" />
        </linearGradient>
        <radialGradient
          id="bf2ae7c7-23c3-4bda-b294-859ebd8c662f"
          data-name="New Gradient Swatch"
          cx="96.23"
          cy="108.71"
          r="12.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#ba9bc9" />
        </radialGradient>
        <radialGradient
          id="eab25e1f-b701-4862-8c22-33cb8ceae277"
          cx="93.91"
          cy="112.28"
          r="5.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.14" stopColor="#dfe1f0" />
          <stop offset="0.35" stopColor="#b7bcdd" />
          <stop offset="0.54" stopColor="#9ba1d0" />
          <stop offset="0.71" stopColor="#8991c8" />
          <stop offset="0.83" stopColor="#838bc5" />
        </radialGradient>
        <radialGradient
          id="fef1a083-c1b5-4918-b23c-5ed64ba55e83"
          cx="96.2"
          cy="119.77"
          r="8.48"
        />
        <radialGradient
          id="bf2e731a-677e-49cb-8a15-4ce0edca2069"
          cx="96.2"
          cy="0.5"
          r="10.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.12" stopColor="#dfe1f0" />
          <stop offset="0.28" stopColor="#b7bcdd" />
          <stop offset="0.43" stopColor="#9ba1d0" />
          <stop offset="0.57" stopColor="#8991c8" />
          <stop offset="0.66" stopColor="#838bc5" />
        </radialGradient>
      </defs>
      <title>Pattern3</title>
      <path
        d="M36.4,63.27A14.48,14.48,0,0,1,50.88,77.75C50.88,85.75,28.4,63.27,36.4,63.27Z"
        transform="translate(-14.35 0.33)"
        fill="#838bc5"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        d="M63.42,86.44a14.47,14.47,0,0,1,14.47,14.48C77.89,108.92,55.42,86.44,63.42,86.44Z"
        transform="translate(-14.35 0.33)"
        fill="#ba9bc9"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        d="M31.05,45.67A14.48,14.48,0,0,1,16.57,60.15C8.57,60.15,31.05,37.68,31.05,45.67Z"
        transform="translate(-14.35 0.33)"
        stroke="#000"
        strokeMiterlimit="10"
        fill="url(#e99e0031-3375-40ba-8396-63bebfafef9a)"
      />
      <path
        d="M84.23,120a14.48,14.48,0,1,1,24,0"
        transform="translate(-14.35 0.33)"
        stroke="#000"
        strokeMiterlimit="10"
        fill="url(#bf2ae7c7-23c3-4bda-b294-859ebd8c662f)"
      />
      <path
        d="M59.55,36.46A20.66,20.66,0,0,1,36.12,19C34.47,7.72,70.83,34.81,59.55,36.46Z"
        transform="translate(-14.35 0.33)"
        fill="#65c8d0"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        d="M57.74,0C61.27,4.05,63.37,8.1,60,8.1A14.46,14.46,0,0,1,47,0"
        transform="translate(-14.35 0.33)"
        fill="#838bc5"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        d="M47,120a14.36,14.36,0,0,1-1.48-6.38c0-4.6,7.44.89,12.24,6.38"
        transform="translate(-14.35 0.33)"
        fill="#838bc5"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        d="M84.25,120a12,12,0,0,1,24,0"
        transform="translate(-14.35 0.33)"
        stroke="#000"
        strokeMiterlimit="10"
        fill="url(#eab25e1f-b701-4862-8c22-33cb8ceae277)"
      />
      <path
        d="M84.25,120a12,12,0,0,1,24,0"
        transform="translate(-14.35 0.33)"
        stroke="#000"
        strokeMiterlimit="10"
        fill="url(#fef1a083-c1b5-4918-b23c-5ed64ba55e83)"
      />
      <path
        d="M108.2,0a12,12,0,0,1-12,12,12,12,0,0,1-12-12"
        transform="translate(-14.35 0.33)"
        stroke="#000"
        strokeMiterlimit="10"
        fill="url(#bf2e731a-677e-49cb-8a15-4ce0edca2069)"
      />
    </g>
  );
};

export interface ISVGParams {
  reversed: boolean;
}

export const SVG = styled.svg<ISVGParams>`
  width: 100%;
  height: 100%;
  height: 100%;
  ${props => {
    if (props?.reversed) {
      return "transform: scaleX(-1)";
    }
  }};
`;

export interface IUntitledCardPathSVGProps {
  reversed?: boolean;
}

export const UntitledCardPathSVG: React.FC<IUntitledCardPathSVGProps> = props => {
  return (
    <SVG
      viewBox="0 0 96.86 120.66"
      preserveAspectRatio="xMidYMid meet"
      reversed={props?.reversed}
    >
      <UntitledCardPath />
    </SVG>
  );
};

export interface IUntitledCardPatternProps {
  reversed?: boolean;
  animated?: boolean;
}

export const _UntitledCardPattern: React.FC<IUntitledCardPatternProps> = props => {
  return (
    <GenericSVG
      reversed={props?.reversed}
      animated={props.animated}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern
          id="puzzle"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <UntitledCardPath />
        </pattern>
      </defs>
      <g>
        <rect fill="url(#puzzle)" width="100%" height="100%"></rect>
      </g>
    </GenericSVG>
  );
};

export const UntitledCardPattern = styled(_UntitledCardPattern)``;

export default UntitledCardPathSVG;
