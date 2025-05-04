/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 11:14:17
 * @FilePath: /new-sails/config/sockets.js
 * @Description: 文件描述
 */
/**
 * WebSocket 服务器设置
 * (sails.config.sockets)
 *
 * 使用以下设置来配置应用程序中的实时功能。
 * (更多推荐设置，请参见 `config/env/production.js`)
 *
 * 所有可用选项，请参见：
 * https://sailsjs.com/config/sockets
 */

module.exports.sockets = {

  /***************************************************************************
  *                                                                          *
  * `transports`                                                             *
  *                                                                          *
  * Socket 客户端在连接和与此 Sails 应用程序通信时允许使用的协议或"传输"。     *
  *                                                                          *
  * > 在此处更改时，请务必同时配置客户端代码中的 `io.sails.transports`。       *
  * > 如果客户端和服务器没有使用相同的传输数组，socket 将无法正常工作。        *
  * >                                                                        *
  * > 更多信息，请参见：                                                      *
  * > https://sailsjs.com/docs/reference/web-sockets/socket-client           *
  *                                                                          *
  ***************************************************************************/

  // transports: [ 'websocket' ],


  /***************************************************************************
  *                                                                          *
  * `beforeConnect`                                                          *
  *                                                                          *
  * 此自定义 beforeConnect 函数将在每次新的 socket 被允许连接之前运行，        *
  * 即在与服务器执行初始 socket.io 握手时运行。                               *
  *                                                                          *
  * https://sailsjs.com/config/sockets#?beforeconnect                        *
  *                                                                          *
  ***************************************************************************/

  // beforeConnect: function(handshake, proceed) {
  //
  //   // `true` 允许 socket 连接。
  //   // (`false` 将拒绝连接)
  //   return proceed(undefined, true);
  //
  // },


  /***************************************************************************
  *                                                                          *
  * `afterDisconnect`                                                        *
  *                                                                          *
  * 此自定义 afterDisconnect 函数将在每次 socket 断开连接时运行                *
  *                                                                          *
  ***************************************************************************/

  // afterDisconnect: function(session, socket, done) {
  //
  //   // 默认：不做任何操作。
  //   // (但始终触发回调)
  //   return done();
  //
  // },


  /***************************************************************************
  *                                                                          *
  * 是否暴露一个 'GET /__getcookie' 路由，用于设置 HTTP-only 的               *
  * session cookie。                                                         *
  *                                                                          *
  ***************************************************************************/

  // grant3rdPartyCookie: true,


};
