import { JSX, splitProps } from "solid-js";

type TextInputProps = {
  ref: (element: HTMLInputElement) => void;
  type: "text" | "email" | "tel" | "password" | "url" | "number" | "date";
  name: string;
  value: string | number | undefined;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
  placeholder?: string;
  required?: boolean;
  label?: string;
  error?: string;
};

export function TextInput(props: TextInputProps) {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);
  return (
    <div class="bg-purple-400">
      {props.label && (
        <label for={props.name}>
          {props.label} {props.required && <span>*</span>}
        </label>
      )}
      <input
        {...inputProps}
        id={props.name}
        value={props.value || ""}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      {props.error && <div id={`${props.name}-error`}>{props.error}</div>}
    </div>
  );
}
