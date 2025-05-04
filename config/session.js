/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 10:59:37
 * @FilePath: /new-sails/config/session.js
 * @Description: 文件描述
 */
/**
 * 会话配置
 * (sails.config.session)
 *
 * 使用以下设置来配置应用程序中的会话(Session)集成。
 * (更多推荐设置，请参见 `config/env/production.js`)
 *
 * 所有可用选项，请参见：
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret(会话密钥)在创建新应用程序时自动生成。                      *
  * 在生产环境中替换此密钥需要自担风险 -- 这将使用户的 cookies 失效，          *
  * 迫使他们重新登录。                                                        *
  *                                                                          *
  ***************************************************************************/
  secret: '49d310d3875584524c31f46a2c49f05e',


  /***************************************************************************
  *                                                                          *
  * 自定义何时跳过内置的会话支持。                                            *
  *                                                                          *
  * (用于性能调优；特别是在响应静态资源请求时避免浪费会话管理的处理周期，      *
  * 比如图片或样式表。)                                                       *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
