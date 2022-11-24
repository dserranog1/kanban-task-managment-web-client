import { Component, For, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";

import AppDarkLogo from "../../assets/logo-dark.svg";
import Item from "./Item";
import ToggleTheme from "./ToggleTheme";
import ShowSideBar from "../../assets/icon-show-sidebar.svg";
import HideSideBarIcon from "./icons/HideSideBarIcon";
import { useNavBarContext } from "../../providers/NavbarProvider";

const NavBar: Component = () => {
  const totalBoards = 3; // soon backend response
  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];

  const [state, { setNavBarDidHide, setNavBarDidShow }] = useNavBarContext();

  const navBarIsHiding = () => {
    setNavBarDidShow(false);
  };

  const navBarIsShowing = () => {
    setNavBarDidHide(false);
  };

  return (
    <>
      <Presence>
        <Show when={state.navBarDidShow}>
          <Motion.nav
            initial={{ transform: "translateX(-300px)" }}
            animate={{ transform: "translateX(0px)" }}
            exit={{ transform: "translateX(-300px)" }}
            transition={{ duration: 0.5 }}
            onMotionComplete={() =>
              !state.navBarDidShow && setNavBarDidHide(true)
            }
            class="flex h-screen min-w-fit flex-col justify-between bg-white shadow-lg shadow-lines-light"
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
        <Show when={state.navBarDidHide}>
          <Motion.div
            initial={{ transform: "translateX(-300px)" }}
            animate={{ transform: "translateX(0px)" }}
            exit={{ transform: "translateX(-300px)" }}
            transition={{ duration: 0.5 }}
            onMotionComplete={() =>
              !state.navBarDidHide && setNavBarDidShow(true)
            }
            class="absolute bottom-8 w-fit"
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
