import { Component, For, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";
import AppDarkLogo from "../../assets/logo-dark.svg";
import AppLightLogo from "../../assets/logo-light.svg";
import Item from "./Item";
import ToggleTheme from "./ToggleTheme";
import ShowSideBar from "../../assets/icon-show-sidebar.svg";
import HideSideBarIcon from "./icons/HideSideBarIcon";
import { useNavBarContext } from "../../providers/NavbarProvider";
import { useThemeContext } from "../../providers/ThemeProvider";
import { useAnimationContext } from "../../providers/AnimationProvider";
const theme = {
  nav: {
    background: { light: "white", dark: "#2B2C37" },
    font: { light: "text-light-dark", dark: "text-white" },
    logo: { light: AppDarkLogo, dark: AppLightLogo },
    line: { light: "244 247 253", dark: "62 63 78" },
  },
};

const NavBar: Component = () => {
  const totalBoards = 3; // soon backend response
  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];

  const [
    navBarState,
    { setNavBarDidHide, setNavBarDidShow, setNavBarIsAnimating },
  ] = useNavBarContext();
  const [themeState] = useThemeContext();
  const [animationState, { setIsAnimating }] = useAnimationContext();

  const navBarIsHiding = () => {
    setNavBarIsAnimating(true);
    setIsAnimating(true);
    setNavBarDidShow(false);
  };

  const navBarIsShowing = () => {
    setNavBarIsAnimating(true);
    setIsAnimating(true);
    setNavBarDidHide(false);
  };

  return (
    <>
      <Presence>
        <Show when={navBarState.navBarDidShow}>
          <Motion.nav
            initial={{
              transform: "translateX(-300px)",
              "background-color": theme.nav.background[themeState.theme],
              "--tw-border-opacity": 1,
              "border-color": `rgb(${
                theme.nav.line[themeState.theme]
              } / var(--tw-border-opacity))`,
            }}
            animate={{
              transform: "translateX(0px)",
              "background-color": theme.nav.background[themeState.theme],
              "--tw-border-opacity": 1,
              "border-color": `rgb(${
                theme.nav.line[themeState.theme]
              } / var(--tw-border-opacity))`,
            }}
            exit={{
              transform: "translateX(-300px)",
              "background-color": theme.nav.background[themeState.theme],
              "--tw-border-opacity": 1,
              "border-color": `rgb(${
                theme.nav.line[themeState.theme]
              } / var(--tw-border-opacity))`,
            }}
            transition={{
              duration: animationState.isAnimating ? 0.5 : 0,
            }}
            onMotionComplete={() => {
              const dropAnimationNotComing =
                navBarState.navBarDidShow && !navBarState.navBarDidHide;
              if (dropAnimationNotComing) {
                setNavBarIsAnimating(false);
                setIsAnimating(false);
              }

              !navBarState.navBarDidShow && setNavBarDidHide(true);
            }}
            class="z-50 flex h-screen min-w-fit flex-col justify-between border-r-2"
          >
            <div>
              <img
                class="mt-8 ml-9"
                src={theme.nav.logo[themeState.theme]}
                alt="Application Logo"
              />
              <h2 class="ml-9 mt-14 mb-5 text-xs font-bold text-medium-grey">
                ALL BOARDS ({totalBoards})
              </h2>
              <For each={boards}>
                {(board) => <Item sectionTitle={board} />}
              </For>
            </div>
            <div class="mb-12 flex flex-col gap-6">
              <ToggleTheme />
              <button
                onClick={() => navBarIsHiding()}
                class="group flex flex-row items-center gap-2 py-4 pl-9 hover:mr-6 hover:rounded-tr-full hover:rounded-br-full hover:bg-navbar-hover"
              >
                <HideSideBarIcon classes="fill-medium-grey group-hover:fill-main-purple" />
                <p class="text-md text-medium-grey group-hover:text-main-purple">
                  Hide Sidebar
                </p>
              </button>
            </div>
          </Motion.nav>
        </Show>
      </Presence>
      <Presence>
        <Show when={navBarState.navBarDidHide}>
          <Motion.div
            initial={{ transform: "translateX(-300px)" }}
            animate={{ transform: "translateX(0px)" }}
            exit={{ transform: "translateX(-300px)" }}
            transition={{ duration: 0.5 }}
            onMotionComplete={() => {
              const navBarAnimationNotComing =
                !navBarState.navBarDidShow && navBarState.navBarDidHide;
              if (navBarAnimationNotComing) {
                setIsAnimating(false);
                setNavBarIsAnimating(false);
              }
              !navBarState.navBarDidHide && setNavBarDidShow(true);
            }}
            class="absolute bottom-8 z-50 w-fit"
          >
            <button
              class="rounded-tr-full rounded-br-full bg-main-purple p-5 hover:bg-main-purple-hover"
              onClick={() => navBarIsShowing()}
            >
              <img src={ShowSideBar} alt="Show Side Bar Button" class="h-3" />
            </button>
          </Motion.div>
        </Show>
      </Presence>
    </>
  );
};

export default NavBar;
