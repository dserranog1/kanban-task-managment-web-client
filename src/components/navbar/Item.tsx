import { Component } from "solid-js";

import IconBoard from "../../assets/icon-board.svg";

interface Props {
  sectionTitle: string;
}

const Item: Component<Props> = (props) => {
  const { sectionTitle } = props;
  return (
    <div class="flex flex-row items-center gap-2 py-4 pl-9">
      <img src={IconBoard} alt="Board Icon" />
      <h3 class="text-md font-bold text-medium-grey">{sectionTitle}</h3>
    </div>
  );
};

export default Item;
