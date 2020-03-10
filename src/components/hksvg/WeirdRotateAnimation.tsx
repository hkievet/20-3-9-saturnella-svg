import { keyframes, createGlobalStyle } from "styled-components";

export const Keys = keyframes`
  from {
    transform: rotateX(0);
  }
  50% {
    transform: rotateY(180deg)
  }
  to {
    transform: rotateY(0);
  }
`;

const Globs = createGlobalStyle`
    transition: 2s;
    animation: ${Keys} 2s linear infinite;
`;

export default Globs;
