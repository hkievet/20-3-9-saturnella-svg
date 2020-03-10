import * as React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import VerticalBarSVG from "../layout/VerticalBarSVG";
import PatternSVG, { Square } from "../hksvg/Square";
import Animation from "../hksvg/Animation";
import ContainerBody from "../layout/ContainerBody";
import HeaderContainer from "../layout/HeaderContainer";
import GlobalStyles from "../layout/GlobalStyles";
import Globs from "../hksvg/WeirdRotateAnimation";
import SvgSelectionMenu from "../hksvg/SvgSelectionMenu";
import {
  MyGuyStillImage,
  MyGuyPath,
  MyGuyPattern
} from "../hksvg/paths/MyGuyPath";
import UntitledCardPathSVG, {
  UntitledCardPattern
} from "../hksvg/paths/UntitledCardPath";
//import PatternSvg from "../../assets/pattern-svg.inline";
//import svgfileurl, {
//ReactComponent as svgFile
//} from "../../assets/bad_heart_vertical_pattern.svg";

const AppContainer = styled.div``;

const Header = styled.h1`
  font-family: "Spartan", sans-serif;
  font-size: 36px;
  margin: 12px auto;
  line-height: 48px;
`;

const TextSection = styled.div`
  width: 100%;
  padding: 0 60px;
  margin-bottom: 60px;
`;

const VerticalColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const App = () => {
  const [selectedSVG, setSelectedSVG] = React.useState<any>(
    UntitledCardPattern
  );
  const [isTriggered, setIsTriggered] = React.useState(false);
  const toggleMe = () => {
    setIsTriggered(!isTriggered);
  };

  const AnimationCss = isTriggered ? <Globs /> : <></>;
  return (
    <AppContainer>
      <GlobalStyles />
      <HeaderContainer onClick={toggleMe}>
        <Header>Saturnella</Header>
      </HeaderContainer>
      <ContainerBody>
        <VerticalBarSVG
          animated={isTriggered}
          component={UntitledCardPattern}
        ></VerticalBarSVG>
        <VerticalColumn>
          <SvgSelectionMenu onClick={setSelectedSVG} />
          <TextSection>
            <p>
              This Page Requires a good browser (ie, not ie11. really, stop
              using it and supporting it if you can). Also, needs to be desktop
              view (Who wants a cluttered screen on a mobile phone? Not me.)
            </p>
            <p>
              (Click Saturnella above to spin the svg columns on either side.)
            </p>
            <p>
              The SVG spec is hard. Exporting an penned path from Illustrator
              into an svg and animating it liket his with React + Typescript +
              Styled Components took a long time to figure out.
            </p>
            <p>
              One of the hardest parts was getting WebPack to build things the
              way I wanted. I used @svgr/webpack and disabled svgo. I can also
              import the url of the svg by using url-loader.
            </p>
          </TextSection>
          <Square />
        </VerticalColumn>
        <VerticalBarSVG
          animated={isTriggered}
          component={MyGuyPattern}
          reversed={true}
        ></VerticalBarSVG>
      </ContainerBody>
    </AppContainer>
  );
};

export default App;
