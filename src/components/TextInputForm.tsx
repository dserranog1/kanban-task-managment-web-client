import { JSX, splitProps } from "solid-js";
import { classNames } from "../utils/conditionalStyles";
import InputLabel from "./InputLabel";

type TextInputProps = {
  ref: (element: HTMLInputElement) => void;
  type: "text" | "email" | "tel" | "password" | "url" | "number" | "date";
  name: string;
  value: string | number | undefined;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
  placeholder?: string;
  label?: string;
  error?: string;
  customWidth?: string;
};

export function TextInput(props: TextInputProps) {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);
  return (
    <div
      class={classNames(
        "flex flex-col items-start justify-center gap-2",
        props.customWidth?.length ? props.customWidth : "w-[416px]"
      )}
    >
      <InputLabel name={props.name} label={props.label} />
      <div
        class={classNames(
          "flex w-full flex-row items-center justify-between rounded-md border border-solid bg-white py-2 px-4",
          props.error?.length ? "border-input-error" : "border-medium-grey"
        )}
      >
        <input
          {...inputProps}
          id={props.name}
          value={props.value || ""}
          aria-invalid={!!props.error}
          aria-errormessage={`${props.name}-error`}
          class={classNames(
            "outline-none placeholder:text-xs placeholder:text-black placeholder:opacity-25"
          )}
          placeholder={props.placeholder}
        />
        {props.error?.length && (
          <div
            class="text-center text-xs font-medium text-input-error"
            id={`${props.name}-error`}
          >
            {props.error}
          </div>
        )}
      </div>
    </div>
  );
}
