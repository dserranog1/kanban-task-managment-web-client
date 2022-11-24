import { Component, createContext, JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const makeNavBarContext = (
  initialNavBarDidShow = true,
  initialNavBarDidHide = false,
  initialAnimating = true
) => {
  const [state, setState] = createStore({
    navBarDidShow: initialNavBarDidShow,
    navBarDidHide: initialNavBarDidHide,
    animating: initialAnimating,
  });
  return [
    state,
    {
      setNavBarDidHide(newState: boolean) {
        if (!newState) {
          setState("animating", true);
        }
        setState("navBarDidHide", newState);
      },
      setNavBarDidShow(newState: boolean) {
        if (!newState) {
          setState("animating", true);
        }
        setState("navBarDidShow", newState);
      },
      setNavBarAnimating(newState: boolean) {
        setState("animating", newState);
      },
    },
  ] as const;
  // `as const` forces tuple type inference
};

type NavBarContextType = ReturnType<typeof makeNavBarContext>;
const NavBarContext = createContext<NavBarContextType>(makeNavBarContext());
export const useNavBarContext = () => useContext(NavBarContext);

interface Props {
  children?: JSX.Element;
}

export const NavbarProvider: Component<Props> = (props) => {
  const [state, setState] = createStore({
    navBarDidShow: true,
    navBarDidHide: false,
    animating: true,
  });

  const navbar: NavBarContextType = [
    state,
    {
      setNavBarDidHide(newState: boolean) {
        if (!newState) {
          setState("animating", true);
        }
        setState("navBarDidHide", newState);
      },
      setNavBarDidShow(newState: boolean) {
        if (!newState) {
          setState("animating", true);
        }
        setState("navBarDidShow", newState);
      },
      setNavBarAnimating(newState: boolean) {
        setState("animating", newState);
      },
    },
  ];
  return (
    <NavBarContext.Provider value={navbar}>
      {props.children}
    </NavBarContext.Provider>
  );
};
