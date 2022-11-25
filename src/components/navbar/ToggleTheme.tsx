import IconLightTheme from "../../assets/icon-light-theme.svg";
import IconDarkTheme from "../../assets/icon-dark-theme.svg";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import { Component } from "solid-js";
import { useThemeContext } from "../../providers/ThemeProvider";
import { classNames } from "../../utils/conditionalStyles";

const theme = {
  switchTheme: {
    background: { light: "bg-light-grey", dark: "bg-very-dark-grey" },
  },
};

const ToggleTheme: Component = () => {
  const [themeState] = useThemeContext();
  return (
    <div
      class={classNames(
        "mx-7 flex flex-row items-center justify-center gap-5 rounded-md px-16 py-4",
        theme.switchTheme.background[themeState.theme]
      )}
    >
      <img src={IconDarkTheme} class="h-4" alt="Toggle Dark mode" />
      <ToggleThemeSwitch />
      <img src={IconLightTheme} alt="Toggle Dark mode" />
    </div>
  );
};

export default ToggleTheme;
