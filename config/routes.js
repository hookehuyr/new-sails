/**
 * 路由映射
 * (sails.config.routes)
 *
 * 您的路由告诉 Sails 在每次收到请求时应该做什么。
 *
 * 有关配置自定义路由的更多信息，请查看：
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * 将位于 `views/homepage.ejs` 的视图设置为您的主页。                        *
  *                                                                          *
  * （或者，删除此项并在您的 `assets` 目录中添加一个                          *
  * `index.html` 文件）                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * 更多自定义路由在这里...                                                  *
  * （参见 https://sailsjs.com/config/routes 获取示例。）                     *
  *                                                                          *
  * 如果对 URL 的请求与此文件中的任何路由都不匹配，它将                        *
  * 与"影子路由"（例如 blueprint 路由）进行匹配。如果与这些路由                *
  * 也不匹配，它将与静态资源进行匹配。                                        *
  *                                                                          *
  ***************************************************************************/

  'GET /test/go': 'TestController.go',
  'GET /test/about': 'TestController.about',

  'GET /page1': 'TestController.page1',
  'GET /page2': [
    { policy: 'accessLog' },
    { controller: 'test', action: 'page2' }
  ],
  'GET /about/page3': 'TestController.page3',

};
