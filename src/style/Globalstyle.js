import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  mainColor: "#F67280",
  secondColor: "#C06C84",
  thirdColor: "#6C5B7B",
  pointColor: "#355C7D",
};

export const Globastyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
`;
