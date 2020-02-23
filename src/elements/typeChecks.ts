import { ExcalidrawElement, ExcalidrawTextElement } from "./Types";

export function isTextElement(
  element: ExcalidrawElement,
): element is ExcalidrawTextElement {
  return element.type === "text";
}
