import NavBar from "./components/navbar/index";
import { Component } from "solid-js";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "@solidjs/router";

const App: Component = () => {
  return (
    <div class="relative flex h-screen flex-row overflow-x-hidden bg-light-grey">
      <NavBar />
      <Routes>
        <Route path="/:slug" component={Dashboard} />
      </Routes>
    </div>
  );
};

export default App;
