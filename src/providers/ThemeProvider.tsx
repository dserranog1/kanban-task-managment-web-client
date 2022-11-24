import { Component, createContext, JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const theme = { light: "light", dark: "dark" } as const;
type themeType = typeof theme[keyof typeof theme];

const makeThemeContext = (initialTheme: themeType = "light") => {
  const [state, toggleState] = createStore<{ theme: themeType }>({
    theme: initialTheme,
  });
  return [
    state,
    {
      toggleTheme() {
        toggleState("theme", state.theme === "light" ? "dark" : "light");
      },
    },
  ] as const;
  // `as const` forces tuple type inference
};

type ThemeContextType = ReturnType<typeof makeThemeContext>;
const ThemeContext = createContext<ThemeContextType>(makeThemeContext());
export const useThemeContext = () => useContext(ThemeContext);

interface Props {
  children?: JSX.Element;
}

export const ThemeProvider: Component<Props> = (props) => {
  const [state, toggleState] = createStore<{ theme: themeType }>({
    theme: "light",
  });

  const Theme: ThemeContextType = [
    state,
    {
      toggleTheme() {
        toggleState("theme", state.theme === "light" ? "dark" : "light");
      },
    },
  ];
  return (
    <ThemeContext.Provider value={Theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
