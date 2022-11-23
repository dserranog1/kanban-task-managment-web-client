import { Component } from "solid-js";
import { useParams } from "@solidjs/router";
import { capitalize } from "../utils/words";
import AppDarkLogo from "../assets/logo-dark.svg";
import { useNavBarContext } from "./navbar/NavbarProvider";

const Header: Component = () => {
  const params = useParams();
  const [state, { setNavBarDidShow }] = useNavBarContext();
  return (
    <div class="flex h-[6.5vh] min-h-fit w-full flex-row items-center justify-between bg-white pl-6 pr-8">
      <div class="mt-7 mb-9 flex h-full flex-row items-center gap-8">
        {!state.navBarDidShow ? (
          <>
            <img class="h-6" src={AppDarkLogo} alt="Application Logo" />

            <div class="h-full w-[1px] bg-lines-light" />
          </>
        ) : null}
        <h1 class="text-2xl font-bold text-light-dark">
          {capitalize({ phrase: params.slug, sep: "-" })}
        </h1>
      </div>
      <div class="flex flex-row">
        <button onClick={() => setNavBarDidShow(false)}>askfjkas</button>
        <h2>aksdjfkasd</h2>
      </div>
    </div>
  );
};

export default Header;
