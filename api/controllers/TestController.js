/*
 * @Date: 2025-05-04 12:04:25
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 13:43:25
 * @FilePath: /new-sails/api/controllers/TestController.js
 * @Description: 文件描述
 */
/**
 * TestController
 * @description :: 用于处理传入请求的服务器端操作。
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  go: function (req, res) {
    // res.ok();
    res.forbidden();
    // res.notFound();
    // res.serverError();
    // res.badRequest('123');
  },

  about: function (req, res) {
    res.view('pages/about', {
      layout: 'layouts/b4',
    });
  },
};
