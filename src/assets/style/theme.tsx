import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

export const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);
  const changeTheme = () =>
    setTheme(theme == darkTheme ? lightTheme : darkTheme);

  const themeOBJ = { theme, changeTheme };
  return <ThemeProvider theme={themeOBJ}>{children}</ThemeProvider>;
};
