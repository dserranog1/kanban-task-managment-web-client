import { Component, createContext, JSX } from "solid-js";
import { createStore } from "solid-js/store";
export const NavbarContext = createContext([
  { navBarDidShow: true, navBarDidHide: false },
  {},
]);

interface Props {
  children?: JSX.Element;
}

export const NavbarProvider: Component<Props> = (props) => {
  const [state, setState] = createStore({
    navBarDidShow: true,
    navBarDidHide: false,
  });
  const navbar = [
    state,
    {
      setNavBarDidHide(newState: boolean) {
        setState("navBarDidHide", newState);
      },
      setNavBarDidShow(newState: boolean) {
        setState("navBarDidShow", newState);
      },
    },
  ];
  return (
    <NavbarContext.Provider value={navbar}>
      {props.children}
    </NavbarContext.Provider>
  );
};
