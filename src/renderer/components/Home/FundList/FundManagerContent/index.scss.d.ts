declare namespace IndexScssNamespace {
  export interface IIndexScss {
    avatar: string;
    avatarContent: string;
    avatarMiniMode: string;
    container: string;
    content: string;
    detailContent: string;
    header: string;
    item: string;
    name: string;
    star: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
