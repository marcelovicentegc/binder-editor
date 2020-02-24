import { BinderEditorElement } from "../elements/Types";
import { getElementAbsoluteCoords } from "../elements";

export function getElementsWithinSelection(
  elements: readonly BinderEditorElement[],
  selection: BinderEditorElement,
) {
  const [
    selectionX1,
    selectionY1,
    selectionX2,
    selectionY2,
  ] = getElementAbsoluteCoords(selection);
  return elements.filter(element => {
    const [
      elementX1,
      elementY1,
      elementX2,
      elementY2,
    ] = getElementAbsoluteCoords(element);

    return (
      element.type !== "selection" &&
      selectionX1 <= elementX1 &&
      selectionY1 <= elementY1 &&
      selectionX2 >= elementX2 &&
      selectionY2 >= elementY2
    );
  });
}

export function clearSelection(elements: readonly BinderEditorElement[]) {
  const newElements = [...elements];

  newElements.forEach(element => {
    element.isSelected = false;
  });

  return newElements;
}

export function deleteSelectedElements(
  elements: readonly BinderEditorElement[],
) {
  return elements.filter(el => !el.isSelected);
}

export function getSelectedIndices(elements: readonly BinderEditorElement[]) {
  const selectedIndices: number[] = [];
  elements.forEach((element, index) => {
    if (element.isSelected) {
      selectedIndices.push(index);
    }
  });
  return selectedIndices;
}

export const someElementIsSelected = (
  elements: readonly BinderEditorElement[],
) => elements.some(element => element.isSelected);

/**
 * Returns common attribute (picked by `getAttribute` callback) of selected
 *  elements. If elements don't share the same value, returns `null`.
 */
export function getCommonAttributeOfSelectedElements<T>(
  elements: readonly BinderEditorElement[],
  getAttribute: (element: BinderEditorElement) => T,
): T | null {
  const attributes = Array.from(
    new Set(
      elements
        .filter(element => element.isSelected)
        .map(element => getAttribute(element)),
    ),
  );
  return attributes.length === 1 ? attributes[0] : null;
}
