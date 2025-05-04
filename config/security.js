/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 11:11:17
 * @FilePath: /new-sails/config/security.js
 * @Description: 文件描述
 */
/**
 * 安全设置
 * (sails.config.security)
 *
 * 这些设置影响您应用程序的安全性，例如
 * 如何处理跨域请求（CORS）以及哪些
 * 路由需要在请求中包含 CSRF 令牌。
 *
 * 有关 Sails 如何处理安全性的概述，请参见：
 * https://sailsjs.com/documentation/concepts/security
 *
 * 有关其他选项和更多信息，请参见：
 * https://sailsjs.com/config/security
 */

module.exports.security = {

  /***************************************************************************
  *                                                                          *
  * CORS 类似于 JSONP 的更现代版本 -- 它允许您的应用程序                       *
  * 绕过浏览器的同源策略，使得您的 Sails 应用程序在一个域名上                   *
  * （例如 example.com）的响应可以被您信任的另一个域名上                       *
  * （例如 trustedsite.net）托管的页面中的客户端 JavaScript 代码接收。         *
  *                                                                          *
  * 有关其他选项和更多信息，请参见：                                          *
  * https://sailsjs.com/docs/concepts/security/cors                          *
  *                                                                          *
  ***************************************************************************/

  // cors: {
  //   allRoutes: false,
  //   allowOrigins: '*',
  //   allowCredentials: false,
  // },


  /****************************************************************************
  *                                                                           *
  * 默认情况下，为了便于快速开发，Sails 内置的 CSRF 保护是禁用的。             *
  * 但请注意！如果您的 Sails 应用程序将被 Web 浏览器访问，                      *
  * 在部署到生产环境之前，您应该**始终**启用 CSRF 保护。                       *
  *                                                                           *
  * 要启用 CSRF 保护，请将此设置为 `true`。                                   *
  *                                                                           *
  * 更多信息，请参见：                                                        *
  * https://sailsjs.com/docs/concepts/security/csrf                           *
  *                                                                           *
  ****************************************************************************/

  // csrf: false

};
