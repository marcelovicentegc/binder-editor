# 📓 binder-editor

[![npm version](https://badge.fury.io/js/%40binder%2Feditor.svg)](https://www.npmjs.com/package/@binder/editor)

## 📦 Installation

`npm i @binder/editor`

`yarn add @binder/editor`

## 🔨 Usage

```typescript
import { BinderEditor, TopErrorBoundary } from "@binder/editor";
import { ThemeProvider, theme } from "@binder/ui";

const App = () => {
  return (
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
            textBoxStyle: {
              menuTitle: "Text box style",
            },
          }}
        />
      </TopErrorBoundary>
    </ThemeProvider>
  );
};
```

## ⬆️ Development directions

1. Clone this repo: `git clone https://github.com/marcelovicentegc/binder-editor.git`
2. cd into it: `cd binder-editor`
3. Install its dependencies (use `npm`): `npm i`
4. Run the application: `npm start`

## 🤝 Contributing

1. Create your own branch from `develop`
2. Make the changes you wish
3. Write or rewrite the unit tests, if necessary
4. Open a pull request pointing to `develop`
5. That's it! 🤓
