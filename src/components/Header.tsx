import { Component, createSignal, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { capitalize } from "../utils/words";
import AppDarkLogo from "../assets/logo-dark.svg";
import ThreeDots from "../assets/icon-vertical-ellipsis.svg";
import { useNavBarContext } from "../providers/NavbarProvider";
import { Motion } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";
import { classNames } from "../utils/conditionalStyles";
import { useThemeContext } from "../providers/ThemeProvider";

const theme = {
  header: { background: { light: "white", dark: "#2B2C37" } },
};

const Header: Component = () => {
  const params = useParams();
  const [navBarState, { setNavBarAnimating }] = useNavBarContext();
  const [themeState] = useThemeContext();

  return (
    <Rerun on={!navBarState.navBarDidShow}>
      <Motion.div
        initial={{
          x: !navBarState.navBarDidShow ? 90 : -10,
          position: "absolute",
          "background-color": theme.header.background[themeState.theme],
        }}
        animate={{
          x: !navBarState.navBarDidShow ? 0 : 300,
          position: "absolute",
          "background-color": theme.header.background[themeState.theme],
        }}
        transition={{
          duration: navBarState.animating ? 0.5 : 0,
        }}
        class={classNames(
          "flex h-[10.5vh] min-h-fit w-full flex-row items-center justify-between pl-6 pr-8"
        )}
        onMotionComplete={() => setNavBarAnimating(false)}
      >
        <div class="mt-7 mb-9 flex h-full flex-row items-center gap-8">
          <Show when={!navBarState.navBarDidShow}>
            <img class="h-6" src={AppDarkLogo} alt="Application Logo" />
            <div class="h-full w-[1px] bg-lines-light" />
          </Show>
          <h1 class="text-2xl font-bold text-light-dark">
            {capitalize({ phrase: params.slug, sep: "-" })}
          </h1>
        </div>
        <div
          class={classNames(
            "flex flex-row items-center gap-6",
            navBarState.navBarDidShow ? "mr-[300px]" : ""
          )}
        >
          <button class="rounded-3xl bg-main-purple-hover py-4">
            <p class="mx-6 font-bold text-white">+ Add New Task</p>
          </button>
          <img class="h-5" src={ThreeDots} />
        </div>
      </Motion.div>
    </Rerun>
  );
};

export default Header;
