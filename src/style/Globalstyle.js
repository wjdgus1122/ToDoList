import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globastyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
`;
