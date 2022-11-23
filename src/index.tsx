/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { NavbarProvider } from "./components/navbar/NavbarProvider";

render(
  () => (
    <Router>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
