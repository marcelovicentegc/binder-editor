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
        toolbarProps={{
          textColor: {
            menuTitle: "Text color",
          },
          textBoxColor: {
            menuTitle: "Text box color",
          },
        }}
      />
    </TopErrorBoundary>
  </ThemeProvider>,
  document.getElementById("root"),
);
