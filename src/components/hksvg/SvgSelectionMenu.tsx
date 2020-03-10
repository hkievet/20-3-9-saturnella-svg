import * as React from "react";
import { svgCollection } from "./SvgCollection";
import styled from "styled-components";
import { MyGuyStillImage } from "./paths/MyGuyPath";
import { Keys } from "../hksvg/WeirdRotateAnimation";
import UntitledCardPathSVG from "./paths/UntitledCardPath";

const DivWrapper = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  background-color: white;
  margin: 36px;
  border-radius: 6px;
  text-align: center;
`;

const Div = styled.div`
  padding: 36px;
  padding-top: 0px;
  color: black;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.button`
  border: 12px solid black;
  margin: 0;
  overflow-y: hidden;
  margin: 0 12px;
  &:hover {
    border: 12px dashed black;
    cursor: pointer;
    > svg {
      transform: scaleX(25deg);
      animation: ${Keys} 2s linear infinite;
    }
  }
`;

const H2 = styled.h2`
  font-size: 24px;
  font-family: "Spartan", sans-serif;
  line-height: 36px;
`;

export interface ISvgSelectionMenuProps {
  onClick: (component: React.FC<any>) => void;
}

export const SvgSelectionMenu: React.FC<ISvgSelectionMenuProps> = props => {
  const Item = styled(svgCollection.untitled.still)``;
  const sectionA = (
    <MenuItem
      onClick={() => {
        return props.onClick(MyGuyStillImage);
      }}
    ></MenuItem>
  );
  return (
    <DivWrapper>
      <H2>Asuhh</H2>
      <Div>{sectionA}</Div>
    </DivWrapper>
  );
};

export default SvgSelectionMenu;
