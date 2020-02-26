export const imports = {
  'src/components/Alert/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-alert-index" */ 'src/components/Alert/index.mdx'
    ),
  'src/components/Badge/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-badge-index" */ 'src/components/Badge/index.mdx'
    ),
  'src/components/Modal/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-modal-index" */ 'src/components/Modal/index.mdx'
    ),
  'src/components/Button/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'
    ),
  'src/components/Tag/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-tag-index" */ 'src/components/Tag/index.mdx'
    ),
}
