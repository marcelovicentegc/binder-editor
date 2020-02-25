import { BinderEditorElement, BinderEditorElementType } from "./elements/Types";
import { TextToolbarProps } from "@binder/ui";

export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | undefined
  | null;

export type Builtin = Primitive | Function | Date | Error | RegExp;

export type OmitProperties<T, P> = Pick<
  T,
  { [K in keyof T]: T[K] extends P ? never : K }[keyof T]
>;

export type DeepOmit<
  T extends DeepOmitModify<Filter>,
  Filter
> = T extends Builtin
  ? T
  : T extends Map<infer KeyType, infer ValueType>
  ? ValueType extends DeepOmitModify<Filter>
    ? Map<KeyType, DeepOmit<ValueType, Filter>>
    : T
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? ValueType extends DeepOmitModify<Filter>
    ? ReadonlyMap<KeyType, DeepOmit<ValueType, Filter>>
    : T
  : T extends WeakMap<infer KeyType, infer ValueType>
  ? ValueType extends DeepOmitModify<Filter>
    ? WeakMap<KeyType, DeepOmit<ValueType, Filter>>
    : T
  : T extends Set<infer ItemType>
  ? ItemType extends DeepOmitModify<Filter>
    ? Set<DeepOmit<ItemType, Filter>>
    : T
  : T extends ReadonlySet<infer ItemType>
  ? ItemType extends DeepOmitModify<Filter>
    ? ReadonlySet<DeepOmit<ItemType, Filter>>
    : T
  : T extends WeakSet<infer ItemType>
  ? ItemType extends DeepOmitModify<Filter>
    ? WeakSet<DeepOmit<ItemType, Filter>>
    : T
  : T extends Array<infer ItemType>
  ? ItemType extends DeepOmitModify<Filter>
    ? Array<DeepOmit<ItemType, Filter>>
    : T
  : T extends Promise<infer ItemType>
  ? ItemType extends DeepOmitModify<Filter>
    ? Promise<DeepOmit<ItemType, Filter>>
    : T
  : { [K in Exclude<keyof T, keyof Filter>]: T[K] } &
      OmitProperties<
        {
          [K in Extract<keyof T, keyof Filter>]: Filter[K] extends true
            ? never
            : T[K] extends DeepOmitModify<Filter[K]>
            ? DeepOmit<T[K], Filter[K]>
            : T[K];
        },
        never
      >;
type DeepOmitModify<T> =
  | {
      [K in keyof T]: T[K] extends never
        ? any
        : T[K] extends object
        ? DeepOmitModify<T[K]>
        : never;
    }
  | Array<DeepOmitModify<T>>
  | Promise<DeepOmitModify<T>>
  | Set<DeepOmitModify<T>>
  | ReadonlySet<DeepOmitModify<T>>
  | WeakSet<DeepOmitModify<T>>
  | Map<any, DeepOmitModify<T>>
  | WeakMap<any, DeepOmitModify<T>>;

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

type BaseTextToolbarProps = Omit<
  TextToolbarProps,
  "textStyle" | "bodyText" | "withDrawOption"
>;

type CustomTextToolbarProps = DeepOmit<
  Required<BaseTextToolbarProps>,
  {
    textColor: {
      color: never;
      onChange: never;
    };
    textBoxColor: {
      color: never;
      onChange: never;
    };
  }
>;

export interface BinderEditorProps {
  actions?: {
    backButton?: {
      label: string;
      buttonProps: React.HTMLProps<HTMLButtonElement>;
    };
  };
  title: string;
  toolbarProps: Required<CustomTextToolbarProps>;
}
