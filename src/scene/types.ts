import { BinderEditorTextElement } from "../elements/Types";

export type SceneState = {
  scrollX: number;
  scrollY: number;
  // null indicates transparent bg
  viewBackgroundColor: string | null;
};

export type SceneScroll = {
  scrollX: number;
  scrollY: number;
};

export interface Scene {
  elements: BinderEditorTextElement[];
}

export interface PreviousScene {
  id: string;
  timestamp: number;
}

export type ExportType = "png" | "clipboard" | "backend" | "svg";
