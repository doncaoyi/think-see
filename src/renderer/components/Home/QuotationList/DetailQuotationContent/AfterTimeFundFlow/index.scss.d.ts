declare namespace IndexScssNamespace {
  export interface IIndexScss {
    active: string;
    content: string;
    performanceSelection: string;
    performanceSelections: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
