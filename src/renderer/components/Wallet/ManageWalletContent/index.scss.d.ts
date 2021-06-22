declare namespace IndexScssNamespace {
  export interface IIndexScss {
    add: string;
    checkbox: string;
    content: string;
    cover: string;
    editor: string;
    icon: string;
    name: string;
    remove: string;
    row: string;
    rowBg: string;
    rowInfo: string;
    time: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
