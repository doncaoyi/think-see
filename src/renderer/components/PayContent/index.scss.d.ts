declare namespace IndexScssNamespace {
  export interface IIndexScss {
    alipay: string;
    content: string;
    describe: string;
    pay: string;
    wechat: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
