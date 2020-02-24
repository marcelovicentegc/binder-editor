import { BinderEditorElement, BinderEditorTextElement } from "../Types";

export function isTextElement(
  element: BinderEditorElement,
): element is BinderEditorTextElement {
  return element.type === "text";
}
