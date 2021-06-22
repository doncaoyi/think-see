declare namespace IndexScssNamespace {
  export interface IIndexScss {
    active: string;
    content: string;
    layout: string;
    tab: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
