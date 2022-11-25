import { Component, createContext, JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const makeAnimationContext = (initialAnimating = true) => {
  const [state, setState] = createStore({
    isAnimating: initialAnimating,
  });
  return [
    state,
    {
      setIsAnimating(newState: boolean) {
        setState("isAnimating", newState);
      },
    },
  ] as const;
  // `as const` forces tuple type inference
};

type AnimationContextType = ReturnType<typeof makeAnimationContext>;
const AnimationContext = createContext<AnimationContextType>(
  makeAnimationContext()
);
export const useAnimationContext = () => useContext(AnimationContext);

interface Props {
  children?: JSX.Element;
}

export const AnimationProvider: Component<Props> = (props) => {
  const [state, setState] = createStore({
    isAnimating: true,
  });

  const animation: AnimationContextType = [
    state,
    {
      setIsAnimating(newState: boolean) {
        setState("isAnimating", newState);
      },
    },
  ];
  return (
    <AnimationContext.Provider value={animation}>
      {props.children}
    </AnimationContext.Provider>
  );
};
