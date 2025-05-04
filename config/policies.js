/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 18:03:54
 * @FilePath: /new-sails/config/policies.js
 * @Description: 文件描述
 */
/**
 * 策略映射
 * (sails.config.policies)
 *
 * 策略是在您的操作执行**之前**运行的简单函数。
 *
 * 有关配置策略的更多信息，请查看：
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * 所有控制器和操作的默认策略，除非被覆盖。                                    *
  * (`true` 表示允许公共访问)                                                 *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  '*': ['accessLog']

};
