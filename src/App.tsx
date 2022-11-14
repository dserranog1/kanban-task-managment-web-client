import { Component, For } from "solid-js";

import AppDarkLogo from "./assets/logo-dark.svg";
import Item from "./components/navbar/Item";
import ToggleTheme from "./components/navbar/ToggleTheme";

const App: Component = () => {
  const totalBoards = 3; // soon backend response
  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];

  return (
    <div class="bg-light-grey">
      <nav class="flex h-screen w-fit flex-col justify-between bg-white shadow-lg shadow-lines-light">
        <div>
          <img class="ml-9 mt-8" src={AppDarkLogo} alt="Application Logo" />
          <h2 class="ml-9 mt-14 mb-5 text-xs font-bold text-medium-grey">
            ALL BOARDS ({totalBoards})
          </h2>
          <For each={boards}>{(board) => <Item sectionTitle={board} />}</For>
        </div>
        <div>
          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
};

export default App;
