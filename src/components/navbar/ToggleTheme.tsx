import IconLightTheme from "../../assets/icon-light-theme.svg";
import IconDarkTheme from "../../assets/icon-dark-theme.svg";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import { Component } from "solid-js";

const ToggleTheme: Component = () => {
  return (
    <div class="mx-7 flex flex-row items-center justify-center gap-5 rounded-md bg-light-grey px-16 py-4">
      <img src={IconDarkTheme} class="h-4" alt="Toggle Dark mode" />
      <ToggleThemeSwitch />
      <img src={IconLightTheme} alt="Toggle Dark mode" />
    </div>
  );
};

export default ToggleTheme;
