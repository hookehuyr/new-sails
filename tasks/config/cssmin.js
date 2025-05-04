/*
 * @Date: 2025-05-03 22:02:56
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 11:18:58
 * @FilePath: /new-sails/tasks/config/cssmin.js
 * @Description: 文件描述
 */
/**
 * `tasks/config/cssmin`
 *
 * ---------------------------------------------------------------
 *
 * 与 `concat` 任务一起，这是压缩所有来自 `assets/styles/` 的 CSS 文件
 * （以及可能来自 `assets/styles/importer.less` 的 LESS 导入文件）的最后一步
 *
 * 更多信息请参见：
 *   https://sailsjs.com/anatomy/tasks/config/cssmin.js
 *
 */
module.exports = function(grunt) {

  grunt.config.set('cssmin', {
    dist: {
      src: ['.tmp/public/concat/production.css'],
      dest: '.tmp/public/min/production.min.css'
    }
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // 这个 Grunt 插件是 Sails 默认资源管道的一部分，
  // 所以在这个时候它已经被自动加载了。
  //
  // 当然，你可以通过删除此文件来完全移除这个 Grunt 插件。
  // 但是请注意：你也可以使用你自己的这个 Grunt 插件的
  // 自定义版本。
  //
  // 以下是方法：
  //
  // 1. 将其安装为你的 Sails 应用的本地依赖：
  //    ```
  //    $ npm install grunt-contrib-cssmin --save-dev --save-exact
  //    ```
  //
  //
  // 2. 然后取消注释以下代码：
  //
  // ```
  // // 从 node_modules/ 文件夹加载 Grunt 插件。
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
