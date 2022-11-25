import { Component, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { capitalize } from "../utils/words";
import AppDarkLogo from "../assets/logo-dark.svg";
import AppLightLogo from "../assets/logo-light.svg";
import ThreeDots from "../assets/icon-vertical-ellipsis.svg";
import { useNavBarContext } from "../providers/NavbarProvider";
import { classNames } from "../utils/conditionalStyles";
import { useThemeContext } from "../providers/ThemeProvider";

const theme = {
  header: {
    background: { light: "bg-white", dark: "bg-dark-grey" },
    logo: { light: AppDarkLogo, dark: AppLightLogo },
    line: { light: "bg-lines-light", dark: "bg-lines-dark" },
    font: { light: "text-light-dark", dark: "text-white" },
  },
};

const Header: Component = () => {
  const params = useParams();
  const [navBarState] = useNavBarContext();
  const [themeState] = useThemeContext();

  return (
    <div
      class={classNames(
        "flex h-fit w-screen  flex-row items-center justify-between pl-6 pr-8",
        theme.header.background[themeState.theme]
      )}
    >
      <div class="mt-7 mb-9 flex h-full flex-row items-center gap-8">
        <Show when={!navBarState.navBarDidShow}>
          <img
            class="h-6"
            src={theme.header.logo[themeState.theme]}
            alt="Application Logo"
          />
          <div
            class={classNames(
              "h-full w-[1px]",
              theme.header.line[themeState.theme]
            )}
          />
        </Show>
        <h1
          class={classNames(
            "text-2xl font-bold",
            theme.header.font[themeState.theme]
          )}
        >
          {capitalize({ phrase: params.slug, sep: "-" })}
        </h1>
      </div>
      <div
        class={classNames(
          "flex flex-row items-center gap-6",
          navBarState.navBarDidShow ? "mr-[300px]" : ""
        )}
      >
        <button class="rounded-3xl bg-main-purple-hover py-4 opacity-25">
          <p class="mx-6 font-bold text-white">+ Add New Task</p>
        </button>
        <img class="h-5" src={ThreeDots} />
      </div>
    </div>
  );
};

export default Header;
