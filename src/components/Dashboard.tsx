import { Component } from "solid-js";
import { Rerun } from "@solid-primitives/keyed";
import Header from "./Header";
import { useNavBarContext } from "../providers/NavbarProvider";
import { useThemeContext } from "../providers/ThemeProvider";
import { useAnimationContext } from "../providers/AnimationProvider";
import { Motion } from "@motionone/solid";
import { classNames } from "../utils/conditionalStyles";

const theme = {
  dashboard: {
    background: { light: "bg-light-grey", dark: "bg-very-dark-grey" },
  },
};

const Dashboard: Component = () => {
  const [navBarState] = useNavBarContext();
  const [themeState] = useThemeContext();
  const [animationState, { setIsAnimating }] = useAnimationContext();
  return (
    <Rerun on={!navBarState.navBarDidShow}>
      <Motion.div
        initial={{
          x: !navBarState.navBarDidShow ? 90 : -10,
          position: "absolute",
        }}
        animate={{
          x: !navBarState.navBarDidShow ? 0 : 299.05,
          position: "absolute",
        }}
        transition={{
          duration: animationState.isAnimating ? 0.5 : 0,
        }}
        onMotionComplete={() => !navBarState.navBarIsAnimating && setIsAnimating(false)}
        class="flex h-full flex-col"
      >
        <Header />
        <div
          class={classNames(
            "h-full",
            theme.dashboard.background[themeState.theme]
          )}
        >
          <p> -content goes here-</p>
        </div>
      </Motion.div>
    </Rerun>
  );
};

export default Dashboard;
