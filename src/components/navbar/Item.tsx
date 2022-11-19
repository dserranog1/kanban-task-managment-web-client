import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { useMatch } from "@solidjs/router";
import slugify from "slugify";
import IconBoard from "../../assets/icon-board.svg";
import IconBoardWhite from "../../assets/icon-board-white.svg";
import { classNames } from "../../utils/conditionalStyles";

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
          "flex flex-row items-center gap-2 py-4 pl-9",
          match()
            ? "mr-6 rounded-tr-full rounded-br-full bg-main-purple text-white"
            : "text-medium-grey"
        )}
      >
        <img src={match() ? IconBoardWhite : IconBoard} alt="Board Icon" />
        <h3 class="text-md font-bold">{props.sectionTitle}</h3>
      </div>
    </A>
  );
};

export default Item;
