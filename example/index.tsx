import React from "react";
import { render } from "react-dom";
import { BinderEditor, TopErrorBoundary } from "../src";

render(
  <TopErrorBoundary>
    <BinderEditor />
  </TopErrorBoundary>,
  document.getElementById("root"),
);
