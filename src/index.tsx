/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { NavbarProvider } from "./providers/NavbarProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AnimationProvider } from "./providers/AnimationProvider";

render(
  () => (
    <Router>
      <AnimationProvider>
        <ThemeProvider>
          <NavbarProvider>
            <App />
          </NavbarProvider>
        </ThemeProvider>
      </AnimationProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
