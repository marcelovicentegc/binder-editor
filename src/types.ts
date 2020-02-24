import { BinderEditorElement, BinderEditorElementType } from "./elements/Types";

export type AppState = {
  draggingElement: BinderEditorElement | null;
  resizingElement: BinderEditorElement | null;
  multiElement: BinderEditorElement | null;
  // element being edited, but not necessarily added to elements array yet
  //  (e.g. text element when typing into the input)
  editingElement: BinderEditorElement | null;
  elementType: BinderEditorElementType;
  elementLocked: boolean;
  exportBackground: boolean;
  currentItemStrokeColor: string;
  currentItemBackgroundColor: string;
  currentItemFillStyle: string;
  currentItemStrokeWidth: number;
  currentItemRoughness: number;
  currentItemOpacity: number;
  currentItemFont: string;
  currentTextColor: string;
  currentTextBoxColor: string;
  viewBackgroundColor: string;
  scrollX: number;
  scrollY: number;
  cursorX: number;
  cursorY: number;
  scrolledOutside: boolean;
  name: string;
  selectedId?: string;
};

export interface BinderEditorProps {
  actions?: {
    backButton?: {
      label: string;
      buttonProps: React.HTMLProps<HTMLButtonElement>;
    };
  };
  title: string;
}
