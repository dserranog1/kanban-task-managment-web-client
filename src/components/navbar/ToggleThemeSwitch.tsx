import { Component } from "solid-js";
import { classNames } from "../../utils/conditionalStyles";
import { useThemeContext } from "../../providers/ThemeProvider";

const theme = {
  swtichThemeButton: {
    position: { light: "justify-end", dark: "justify-start" },
  },
};

const ToggleThemeSwitch: Component = () => {
  const [themeState, { toggleTheme }] = useThemeContext();
  const handleThemeChange = () => {
    // TODO: global state to define the background colors of the app
    toggleTheme();
  };
  return (
    <button
      onClick={() => handleThemeChange()}
      class={classNames(
        "flex w-10 rounded-xl bg-main-purple py-1 px-1",
        theme.swtichThemeButton.position[themeState.theme]
      )}
    >
      <div class="h-4 w-4 rounded-3xl bg-white" />
    </button>
  );
};

export default ToggleThemeSwitch;
