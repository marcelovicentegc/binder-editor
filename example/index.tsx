import React from "react";
import { render } from "react-dom";
import { BinderEditor, TopErrorBoundary } from "../src";
import { ThemeProvider, theme } from "@binder/ui";

render(
  <ThemeProvider theme={theme}>
    <TopErrorBoundary>
      <BinderEditor
        title={"Angiosperms"}
        actions={{
          backButton: {
            label: "Back",
            buttonProps: {
              onClick: () => alert("🚀🚀🚀🚀🚀🚀🚀"),
            },
          },
        }}
      />
    </TopErrorBoundary>
  </ThemeProvider>,
  document.getElementById("root"),
);
