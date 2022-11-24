/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { NavbarProvider } from "./providers/NavbarProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

render(
  () => (
    <Router>
      <ThemeProvider>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </ThemeProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
