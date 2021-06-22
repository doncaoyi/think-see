declare namespace IndexScssNamespace {
  export interface IIndexScss {
    arrow: string;
    code: string;
    collapseContent: string;
    conciseValue: string;
    editor: string;
    fundName: string;
    remove: string;
    row: string;
    rowBar: string;
    unuseText: string;
    value: string;
    view: string;
    warn: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
