/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 11:07:41
 * @FilePath: /new-sails/config/http.js
 * @Description: 文件描述
 */
/**
 * HTTP 服务器设置
 * (sails.config.http)
 *
 * Sails 中底层 HTTP 服务器的配置。
 * (更多推荐设置，请参见 `config/env/production.js`)
 *
 * 更多配置信息，请查看：
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * 用于处理每个 HTTP 请求的 Sails/Express 中间件。                             *
  * (仅适用于 HTTP 请求 -- 不适用于虚拟 WebSocket 请求。)                       *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * HTTP 请求的中间件运行顺序。                                               *
    * (此 Sails 应用程序的路由由下面的 "router" 中间件处理。)                   *
    *                                                                          *
    ***************************************************************************/

    // order: [
    //   'cookieParser',
    //   'session',
    //   'bodyParser',
    //   'compress',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
    // ],


    /***************************************************************************
    *                                                                          *
    * 用于处理传入的多部分 HTTP 请求的 body 解析器。                             *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

  },

};
