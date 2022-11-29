import { Accessor, Component, createSignal, JSX, Setter } from "solid-js";

interface Props {
  children: (props: {
    showModal: Accessor<boolean>;
    setShowModal: Setter<boolean>;
  }) => JSX.Element;
}

const ModalManager: Component<Props> = (props) => {
  const [showModal, setShowModal] = createSignal(false);
  return <>{props.children({ showModal, setShowModal })}</>;
};

export default ModalManager;
