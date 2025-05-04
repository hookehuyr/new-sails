/*
 * @Date: 2025-05-03 22:02:56
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 11:18:44
 * @FilePath: /new-sails/tasks/config/copy.js
 * @Description: 文件描述
 */
/**
 * `tasks/config/copy`
 *
 * ---------------------------------------------------------------
 *
 * 复制文件和/或文件夹。
 *
 * 更多信息请参见：
 *   https://sailsjs.com/anatomy/tasks/config/copy.js
 *
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    },
    beforeLinkBuildProd: {
      files: [{
        expand: true,
        cwd: '.tmp/public/hash',
        src: ['**/*'],
        dest: '.tmp/public/dist'
      }]
    },
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
  // 1. Install it as a local dependency of your Sails app:
  //    ```
  //    $ npm install grunt-contrib-copy --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
