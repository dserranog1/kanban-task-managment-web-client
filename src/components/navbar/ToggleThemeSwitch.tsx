import { Component, createSignal } from "solid-js";
import { classNames } from "../../utils/conditionalStyles";

const ToggleThemeSwitch: Component = () => {
  const [buttonPosition, setButtonPosition] = createSignal("justify-start");
  const handleThemeChange = () => {
    // TODO: global state to define the background colors of the app
    setButtonPosition(
      buttonPosition() === "justify-end" ? "justify-start" : "justify-end"
    );
  };
  return (
    <button
      onClick={() => handleThemeChange()}
      class={classNames(
        "flex w-10 rounded-xl bg-main-purple py-1 px-1",
        buttonPosition()
      )}
    >
      <div class="h-4 w-4 rounded-3xl bg-white" />
    </button>
  );
};

export default ToggleThemeSwitch;
