declare namespace IndexScssNamespace {
  export interface IIndexScss {
    content: string;
    eye: string;
    info: string;
    last: string;
    lowKey: string;
    miniMode: string;
    moneyBar: string;
    timeBar: string;
    walletIcon: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
