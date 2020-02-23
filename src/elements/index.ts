export { newElement, newTextElement, duplicateElement } from "./NewElement";
export {
  getElementAbsoluteCoords,
  getCommonBounds,
  getDiamondPoints,
  getArrowPoints,
  getLinePoints,
  getArrowAbsoluteBounds,
} from "./Bounds";

export { rectangulesHandler } from "./RectangulesHandler";
export { hitTest } from "./Collision";
export {
  resizeTest,
  getCursorForResizingElement,
  normalizeResizeHandle,
} from "./ResizeTest";
export { isTextElement } from "./TypeChecks";
export { textWysiwyg } from "./TextWYSIWYG";
export { redrawTextBoundingBox } from "./TextElement";
export {
  getPerfectElementSize,
  isInvisiblySmallElement,
  resizePerfectLineForNWHandler,
  normalizeDimensions,
} from "./SizeHelpers";
