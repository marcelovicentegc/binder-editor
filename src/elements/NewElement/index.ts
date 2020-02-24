import { randomSeed } from "roughjs/bin/math";
import nanoid from "nanoid";
import { Drawable } from "roughjs/bin/core";
import { Point } from "roughjs/bin/geometry";

import {
  BinderEditorElement,
  BinderEditorTextElement,
  BinderEditorElementType,
} from "../Types";
import { measureText } from "../../utils";

export function newElement(
  type: BinderEditorElementType,
  x: number,
  y: number,
  strokeColor: string,
  backgroundColor: string,
  fillStyle: string,
  strokeWidth: number,
  roughness: number,
  opacity: number,
  width = 0,
  height = 0,
) {
  return {
    id: nanoid(),
    type,
    x,
    y,
    width,
    height,
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    roughness,
    opacity,
    isSelected: false,
    seed: randomSeed(),
    shape: null as Drawable | Drawable[] | null,
    points: [] as Point[],
  };
}

export function newTextElement(
  element: BinderEditorElement,
  text: string,
  font: string,
) {
  const metrics = measureText(text, font);

  return {
    ...element,
    type: "text",
    text: text,
    font: font,
    // Center the text
    x: element.x - metrics.width / 2,
    y: element.y - metrics.height / 2,
    width: metrics.width,
    height: metrics.height,
    baseline: metrics.baseline,
  } as BinderEditorTextElement;
}

export function duplicateElement(element: ReturnType<typeof newElement>) {
  const copy = { ...element };
  delete copy.shape;
  copy.id = nanoid();
  copy.seed = randomSeed();
  return copy;
}
