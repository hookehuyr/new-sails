/*
 * @Date: 2025-05-04 17:59:51
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 18:08:34
 * @FilePath: /new-sails/api/policies/accessLog.js
 * @Description: 文件描述
 */

module.exports = function (req, res, next) {
    console.info(req.method, req.path);
    next();
};
