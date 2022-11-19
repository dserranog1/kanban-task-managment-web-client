import { Component } from "solid-js";
import { useParams } from "@solidjs/router";

const Header: Component = () => {
  const params = useParams();
  return (
    <>
      <h1>here comes the header for {params.slug}</h1>
    </>
  );
};

export default Header;
