import { Component, createSignal, For, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";

import AppDarkLogo from "../../assets/logo-dark.svg";
import Item from "./Item";
import ToggleTheme from "./ToggleTheme";
import HideSideBar from "../../assets/icon-hide-sidebar.svg";
import ShowSideBar from "../../assets/icon-show-sidebar.svg";

const NavBar: Component = () => {
  const [navBarDidShow, setNavBarDidShow] = createSignal(true);
  const [navBarDidHide, setNavBarDidHide] = createSignal(false);

  const totalBoards = 3; // soon backend response
  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];

  const navBarIsHiding = () => {
    setNavBarDidShow(false);
  };

  const navBarIsShowing = () => {
    setNavBarDidHide(false);
  };

  return (
    <>
      <Presence>
        <Show when={navBarDidShow()}>
          <Motion.nav
            initial={{ transform: "translateX(-300px)" }}
            animate={{ transform: "translateX(0px)" }}
            exit={{ transform: "translateX(-300px)" }}
            transition={{ duration: 0.5 }}
            onMotionComplete={() => !navBarDidShow() && setNavBarDidHide(true)}
            class="flex h-screen w-fit flex-col justify-between bg-white shadow-lg shadow-lines-light"
          >
            <div>
              <img class="mt-8 ml-9" src={AppDarkLogo} alt="Application Logo" />
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
                class="ml-9 flex flex-row items-center gap-2"
              >
                <img src={HideSideBar} alt="Hide Side Bar Button" />
                <p class="text-md text-medium-grey">Hide Sidebar</p>
              </button>
            </div>
          </Motion.nav>
        </Show>
      </Presence>
      <Presence>
        <Show when={navBarDidHide()}>
          <Motion.div
            initial={{ transform: "translateX(-300px)" }}
            animate={{ transform: "translateX(0px)" }}
            exit={{ transform: "translateX(-300px)" }}
            transition={{ duration: 0.5 }}
            onMotionComplete={() => !navBarDidHide() && setNavBarDidShow(true)}
            class="mb-8 flex h-screen w-fit flex-col justify-end pb-8"
          >
            <button
              class="rounded-tr-full rounded-br-full bg-main-purple p-5"
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
