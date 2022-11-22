import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { useMatch } from "@solidjs/router";
import slugify from "slugify";
import { classNames } from "../../utils/conditionalStyles";
import BoardIcon from "./icons/BoardIcon";

interface Props {
  sectionTitle: string;
}

const Item: Component<Props> = (props) => {
  const match = useMatch(() => slugify(props.sectionTitle, { lower: true }));
  const slugifiedTitle = () => {
    return slugify(props.sectionTitle, { lower: true });
  };
  return (
    <A href={slugifiedTitle()}>
      <div
        class={classNames(
          "flex flex-row items-center gap-2 py-4 pl-9 ",
          match()
            ? "mr-6 rounded-tr-full rounded-br-full bg-main-purple text-white"
            : "group text-medium-grey hover:mr-6 hover:rounded-br-full hover:rounded-tr-full hover:bg-navbar-hover"
        )}
      >
        {match() ? (
          <BoardIcon classes="fill-white" />
        ) : (
          <BoardIcon classes="fill-medium-grey group-hover:fill-main-purple" />
        )}
        <h3 class="text-md font-bold group-hover:text-main-purple">
          {props.sectionTitle}
        </h3>
      </div>
    </A>
  );
};

export default Item;
