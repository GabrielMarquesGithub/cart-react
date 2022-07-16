// styled.d.ts
import "styled-components";
import { lightTheme } from "./assets/style/themes/light";
interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    changeTheme: () => void;
    theme: {
      background: string;
      text: string;
      secondary: string;
      dark: string;
      light: string;
      white: string;
      black: string;
      grey: string;
    };
  }
}
