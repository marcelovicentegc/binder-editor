import { measureText } from "../../utils";
import { BinderEditorTextElement } from "../Types";

export const redrawTextBoundingBox = (element: BinderEditorTextElement) => {
  const metrics = measureText(element.text, element.font);
  element.width = metrics.width;
  element.height = metrics.height;
  element.baseline = metrics.baseline;
};
