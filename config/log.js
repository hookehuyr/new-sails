/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 11:09:35
 * @FilePath: /new-sails/config/log.js
 * @Description: 文件描述
 */
/**
 * 内置日志配置
 * (sails.config.log)
 *
 * 配置应用程序的日志级别以及传输方式
 * （在底层，Sails 使用 Winston 进行日志记录，
 * 这允许为日志消息使用一些非常优秀的自定义传输/适配器）
 *
 * 有关 Sails 日志记录器的更多信息，请查看：
 * https://sailsjs.com/docs/concepts/logging
 */

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * 有效的 `level` 配置：即使用 sails.log.*() 捕获的                          *
  * 最低日志级别                                                             *
  *                                                                          *
  * 日志级别从低到高的优先顺序是：                                            *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * 您也可以将级别设置为 "silent" 以禁止所有日志。                            *
  *                                                                          *
  ***************************************************************************/

  // level: 'info'

};
