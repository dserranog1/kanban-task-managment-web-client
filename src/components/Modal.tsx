import { Component, JSX, Setter, Show } from "solid-js";
import { Portal } from "solid-js/web";

interface Props {
  visible: boolean;
  setVisible: Setter<boolean>;
  children: JSX.Element;
}

const Modal: Component<Props> = (props) => {
  return (
    <Show when={props.visible}>
      <Portal>
        <div
          onClick={() => props.setVisible(false)}
          class="fixed top-0 left-0 bottom-0 right-0 z-40 flex items-center justify-center bg-black/50"
        >
          <div onClick={(event) => event.stopPropagation()}>
            {props.children}
          </div>
        </div>
      </Portal>
    </Show>
  );
};

export default Modal;
