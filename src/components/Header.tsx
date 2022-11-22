import { Component, useContext } from "solid-js";
import { useParams } from "@solidjs/router";
import { capitalize } from "../utils/words";
import { NavbarContext, NavbarProvider } from "./navbar/NavbarProvider";
import AppDarkLogo from "../assets/logo-dark.svg";

const Header: Component = () => {
  const params = useParams();
  const [state, { setNavBarDidShow }] = useContext(NavbarContext);
  return (
    <div class="flex h-fit w-full flex-row items-center justify-between bg-white pt-7 pb-9 pl-6 pr-8">
      {!state.navBarDidShow ? (
        <img class="mt-8 ml-9" src={AppDarkLogo} alt="Application Logo" />
      ) : null}
      <h1 class="text-2xl font-bold text-light-dark">
        {capitalize({ phrase: params.slug, sep: "-" })}
      </h1>
      <div class="flex-flex row">
        <button onClick={() => setNavBarDidShow(false)}>askfjkas</button>
        <h2>aksdjfkasd</h2>
      </div>
    </div>
  );
};

export default Header;
