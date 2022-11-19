import NavBar from "./components/navbar/index";
import { Component } from "solid-js";
import Header from "./components/Header";
import { Route, Routes } from "@solidjs/router";

const App: Component = () => {
  return (
    <>
      <div class="flex h-screen flex-row bg-light-grey">
        <NavBar />
        <Routes>
          <Route path="/:slug" component={Header} />
        </Routes>
      </div>
    </>
  );
};

export default App;
