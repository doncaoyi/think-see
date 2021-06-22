declare namespace IndexScssNamespace {
  export interface IIndexScss {
    checkbox: string;
    editor: string;
    extra: string;
    icon: string;
    readonly: string;
    remove: string;
    row: string;
    rowInfo: string;
    time: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
