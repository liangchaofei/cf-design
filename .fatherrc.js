/*
 * @Author: your name
 * @Date: 2020-02-22 21:52:34
 * @LastEditTime: 2020-02-22 21:54:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cf-design/.fatherrc.js
 */
// .fatherrc.js
const options = {
    entry: 'src/index.js',
    doc: {
      title: 'cf-design',
      themeConfig: { mode: 'light' },
      base: '/cf-design'
    },
    extraBabelPlugins: [
        ['babel-plugin-import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }]
    ],
    // cssModules: true,
    extractCSS: true,
    lessInBabelMode: true,
    runtimeHelpers: true,
    esm: 'babel', 
    cjs: 'babel',
    autoprefixer: {
        browsers: ['ie>9', 'Safari >= 6'],
    }
  };
  
  export default options;
  