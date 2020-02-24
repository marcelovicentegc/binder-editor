import { newElement } from "../NewElement";

export type BinderEditorElement = ReturnType<typeof newElement>;
export type BinderEditorTextElement = BinderEditorElement & {
  type: "text";
  font: string;
  text: string;
  // for backward compatibility
  actualBoundingBoxAscent?: number;
  baseline: number;
};
