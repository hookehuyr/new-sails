/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 20:01:34
 * @FilePath: /new-sails/config/datastores.js
 * @Description: 文件描述
 */
/**
 * 数据存储
 * (sails.config.datastores)
 *
 * 一组数据存储配置，告诉 Sails 在执行内置模型方法（如 `.find()` 和 `.create()`）时
 * 从哪里获取或保存数据。
 *
 *  > 此文件主要用于配置您的开发数据库，以及由单个模型使用的任何其他一次性数据库。
 *  > 准备上线？请转到 `config/env/production.js`。
 *
 * 有关配置数据存储的更多信息，请查看：
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


  /***************************************************************************
  *                                                                          *
  * 您应用程序的默认数据存储。                                               *
  *                                                                          *
  * Sails 应用程序默认使用内置的数据库适配器 `sails-disk` 读写本地磁盘。      *
  * 这个功能纯粹是为了开发过程中的便利性；因为 `sails-disk` 不适合在          *
  * 生产环境中使用。                                                         *
  *                                                                          *
  * 要在开发环境中使用不同的数据库，请按照下面的说明操作。                    *
  * 否则，只需保持默认数据存储原样，不设置 `adapter`。                        *
  *                                                                          *
  * (关于生产配置，请参见 `config/env/production.js`。)                      *
  *                                                                          *
  ***************************************************************************/

  default: {

    /***************************************************************************
    *                                                                          *
    * 想在开发过程中使用不同的数据库？                                         *
    *                                                                          *
    * 1. 选择一个适配器：                                                      *
    *    https://sailsjs.com/plugins/databases                                 *
    *                                                                          *
    * 2. 将其安装为 Sails 应用程序的依赖项。                                   *
    *    (例如：npm install sails-mysql --save)                                *
    *                                                                          *
    * 3. 然后传入适配器，并提供连接 URL。                                      *
    *    (参见 https://sailsjs.com/config/datastores 获取帮助。)               *
    *                                                                          *
    ***************************************************************************/
    adapter: 'sails-mysql',
    url: 'mysql://root:huyirui520@localhost:3306/new_sails_db',

  },


};
