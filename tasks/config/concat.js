/*
 * @Date: 2025-05-03 22:02:56
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 11:18:34
 * @FilePath: /new-sails/tasks/config/concat.js
 * @Description: 文件描述
 */
/**
 * `tasks/config/concat`
 *
 * ---------------------------------------------------------------
 *
 * 生成单一文件的中间步骤，这些文件随后可以
 * 传递给 `uglify` 和/或 `cssmin` 进行压缩。
 *
 * 更多信息请参见：
 *   https://sailsjs.com/anatomy/tasks/config/concat.js
 *
 */
module.exports = function(grunt) {

  grunt.config.set('concat', {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
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
  //    $ npm install grunt-contrib-concat --save-dev --save-exact
  //    ```
  //
  //
  // 2. 然后取消注释以下代码：
  //
  // ```
  // // 从 node_modules/ 文件夹加载 Grunt 插件。
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
