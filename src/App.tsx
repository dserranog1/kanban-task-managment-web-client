import NavBar from "./components/navbar/index";
import { Component } from "solid-js";
import Header from "./components/Header";
import { Route, Routes } from "@solidjs/router";
import { NavbarProvider } from "./components/navbar/NavbarProvider";

const App: Component = () => {
  return (
    <>
      <NavbarProvider>
        <div class="flex h-screen flex-row bg-light-grey">
          <NavBar />
          <Routes>
            <Route path="/:slug" component={Header} />
          </Routes>
        </div>
      </NavbarProvider>
    </>
  );
};

export default App;
