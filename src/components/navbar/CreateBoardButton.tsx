import { Component } from "solid-js";
import BoardIcon from "./icons/BoardIcon";

interface Props {
  setModalIsActive: (state: boolean) => void;
}

const CreateBoardButton: Component<Props> = (props) => {
  return (
    <button onClick={() => props.setModalIsActive(true)}>
      <div class="flex flex-row items-center gap-2 py-4 pl-9 ">
        <BoardIcon classes="fill-main-purple" />
        <h3 class="text-md font-bold text-main-purple">+ Create new board</h3>
      </div>
    </button>
  );
};

export default CreateBoardButton;
