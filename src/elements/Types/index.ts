import { newElement } from "../NewElement";

export type ExcalidrawElement = ReturnType<typeof newElement>;
export type ExcalidrawTextElement = ExcalidrawElement & {
  type: "text";
  font: string;
  text: string;
  // for backward compatibility
  actualBoundingBoxAscent?: number;
  baseline: number;
};
