import { Component } from "solid-js";
import { classNames } from "../utils/conditionalStyles";

interface Props {
  text: string;
  backgroundColor: string;
  textColor: string;
  handleOnClick: () => void;
}
const FormButton: Component<Props> = (props) => {
  return (
    <button
      class={classNames(
        "mt-6 flex w-full items-center justify-center rounded-3xl  py-2 text-center text-sm font-bold ",
        `${props.textColor} ${props.backgroundColor}`
      )}
      onClick={() => props.handleOnClick()}
    >
      {props.text}
    </button>
  );
};

export default FormButton;
