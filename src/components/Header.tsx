import { Component, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { capitalize } from "../utils/words";
import AppDarkLogo from "../assets/logo-dark.svg";
import { useNavBarContext } from "./navbar/NavbarProvider";
import { Motion } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";
import { classNames } from "../utils/conditionalStyles";

const Header: Component = () => {
  const params = useParams();
  const [state] = useNavBarContext();
  return (
    <Rerun on={!state.navBarDidShow}>
      <Motion.div
        initial={{
          x: !state.navBarDidShow ? 90 : -10,
          position: "absolute",
        }}
        animate={{
          x: !state.navBarDidShow ? 0 : 300,
          position: "absolute",
        }}
        transition={{ duration: 0.5 }}
        class="flex h-[10.5vh] min-h-fit w-full flex-row items-center justify-between bg-white pl-6 pr-8"
      >
        <div class="mt-7 mb-9 flex h-full flex-row items-center gap-8">
          <Show when={!state.navBarDidShow}>
            <img class="h-6" src={AppDarkLogo} alt="Application Logo" />
            <div class="h-full w-[1px] bg-lines-light" />
          </Show>
          <h1 class="text-2xl font-bold text-light-dark">
            {capitalize({ phrase: params.slug, sep: "-" })}
          </h1>
        </div>
        <div
          class={classNames(
            "flex flex-row",
            state.navBarDidShow ? "mr-[300px]" : ""
          )}
        >
          <button class="rounded-3xl bg-main-purple-hover py-4">
            <p class="mx-6 font-bold text-white">+ Add New Task</p>
          </button>
        </div>
      </Motion.div>
    </Rerun>
  );
};

export default Header;
