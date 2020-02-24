import React from "react";
import { BinderEditorElement } from "../elements/Types";
import { AppState } from "../types";

export type ActionResult = {
  elements?: BinderEditorElement[];
  appState?: AppState;
};

type ActionFn = (
  elements: readonly BinderEditorElement[],
  appState: AppState,
  formData: any,
) => ActionResult;

export type UpdaterFn = (res: ActionResult) => void;
export type ActionFilterFn = (action: Action) => void;

export interface Action {
  name: string;
  PanelComponent?: React.FC<{
    elements: readonly BinderEditorElement[];
    appState: AppState;
    updateData: (formData: any) => void;
  }>;
  perform: ActionFn;
  keyPriority?: number;
  keyTest?: (
    event: KeyboardEvent,
    appState: AppState,
    elements: readonly BinderEditorElement[],
  ) => boolean;
  contextItemLabel?: string;
  contextMenuOrder?: number;
}

export interface ActionsManagerInterface {
  actions: {
    [keyProp: string]: Action;
  };
  registerAction: (action: Action) => void;
  handleKeyDown: (
    event: KeyboardEvent,
    elements: readonly BinderEditorElement[],
    appState: AppState,
  ) => ActionResult | null;
  getContextMenuItems: (
    elements: readonly BinderEditorElement[],
    appState: AppState,
    updater: UpdaterFn,
    actionFilter: ActionFilterFn,
  ) => { label: string; action: () => void }[];
  renderAction: (
    name: string,
    elements: readonly BinderEditorElement[],
    appState: AppState,
    updater: UpdaterFn,
  ) => React.ReactElement | null;
}
