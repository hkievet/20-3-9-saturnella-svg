import * as React from "react";
import collection, { svgCollection } from "./SvgCollection";
import styled from "styled-components";
import { MyGuyStillImage } from "./paths/MyGuyPath";
import { Keys } from "../hksvg/WeirdRotateAnimation";

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

const Image2 = collection.untitled.still;
export const SvgSelectionMenu: React.FC<ISvgSelectionMenuProps> = props => {
  const sectionA = (
    <MenuItem
      onClick={() => {
        return;
      }}
    >
      <MyGuyStillImage />
    </MenuItem>
  );
  const sectionB = (
    <MenuItem
      onClick={() => {
        return;
      }}
    >
      <Image2 />
    </MenuItem>
  );
  return (
    <DivWrapper>
      <H2>Pick A Card</H2>
      <Div>
        {sectionA}
        {sectionB}
      </Div>
    </DivWrapper>
  );
};

export default SvgSelectionMenu;
