import { Show } from "solid-js";
import { classNames } from "../utils/conditionalStyles";

type InputLabelProps = {
  name: string;
  label?: string;
  margin?: "none";
};

const InputLabel = (props: InputLabelProps) => {
  return (
    <Show when={props.label}>
      <label
        class={classNames("text-xs font-bold text-medium-grey")}
        for={props.name}
      >
        {props.label}
      </label>
    </Show>
  );
};

export default InputLabel;
