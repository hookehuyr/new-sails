/**
 * 默认模型设置
 * (sails.config.models)
 *
 * 您的默认的、项目范围的模型设置。也可以通过在模型定义中设置顶级属性来
 * 针对每个模型进行覆盖。
 *
 * 有关所有可用模型设置的详细信息，请参见：
 * https://sailsjs.com/config/models
 *
 * 关于 Sails 模型设置的更多一般背景信息，以及如何在项目范围或每个模型的
 * 基础上配置它们，请参见：
 * https://sailsjs.com/docs/concepts/models-and-orm/model-settings
 */

module.exports.models = {


  /***************************************************************************
  *                                                                          *
  * 模型方法如 `.create()` 和 `.update()` 是否应该忽略（并拒绝保存）         *
  * 未识别的数据 -- 即模型定义中属性明确定义之外的属性。                      *
  *                                                                          *
  * 为了便于将来维护代码库，通常将其设置为 `true` 是个好主意。                *
  *                                                                          *
  * > 注意，并非所有数据库都支持 `schema: false`。                            *
  * > 例如，如果您使用的是 SQL 数据库，那么相关模型实际上                     *
  * > 总是 `schema: true`。如果完全没有提供 `schema` 设置，                   *
  * > 行为将由数据库适配器决定。                                             *
  * >                                                                        *
  * > 更多信息，请参见：                                                     *
  * > https://sailsjs.com/docs/concepts/orm/model-settings#?schema           *
  *                                                                          *
  ***************************************************************************/

  // schema: true,


  /***************************************************************************
  *                                                                          *
  * Sails 将如何以及是否尝试自动重建架构中的表/集合等。                      *
  *                                                                          *
  * > 注意，在生产环境中运行时，无论您在这里如何配置，                        *
  * > 这都将自动设置为 `migrate: 'safe'`。这是一个故障保护机制，              *
  * > 防止 Sails 意外地在生产数据库上运行自动迁移。                          *
  * >                                                                        *
  * > 更多信息，请参见：                                                     *
  * > https://sailsjs.com/docs/concepts/orm/model-settings#?migrate          *
  *                                                                          *
  ***************************************************************************/

  migrate: 'alter',


  /***************************************************************************
  *                                                                          *
  * 默认情况下包含在所有模型中的基本属性。                                   *
  * 按照惯例，这包括您的主键属性（`id`），以及两个用于跟踪记录               *
  * 最后创建或更新时间的时间戳属性。                                         *
  *                                                                          *
  * > 更多信息，请参见：                                                     *
  * > https://sailsjs.com/docs/concepts/orm/model-settings#?attributes       *
  *                                                                          *
  ***************************************************************************/

  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'number', autoIncrement: true, },
    //--------------------------------------------------------------------------
    //  /\   Using MongoDB?
    //  ||   Replace `id` above with this instead:
    //
    // ```
    // id: { type: 'string', columnName: '_id' },
    // ```
    //
    // Plus, don't forget to configure MongoDB as your default datastore:
    // https://sailsjs.com/docs/tutorials/using-mongo-db
    //--------------------------------------------------------------------------
  },


  /******************************************************************************
  *                                                                             *
  * 用于静态加密的 DEKs (数据加密密钥) 集合。                                   *
  * 即当为带有 `encrypt: true` 的属性加密/解密数据时使用。                      *
  *                                                                             *
  * > `default` DEK 用于所有新的加密，但可以配置多个 DEKs                       *
  * > 以允许密钥轮换。在生产环境中，请确保像管理其他敏感凭据                    *
  * > 一样管理这些密钥。                                                        *
  *                                                                             *
  * > 更多信息，请参见：                                                        *
  * > https://sailsjs.com/docs/concepts/orm/model-settings#?dataEncryptionKeys  *
  *                                                                             *
  ******************************************************************************/

  dataEncryptionKeys: {
    default: 'fWziG52IYBV2LYPpGlRF9Fq9LBagP7rO79Zsu1PzJ/0='
  },


  /***************************************************************************
  *                                                                          *
  * 是否应该使用内置的 polyfill 自动清理关联的隐式记录。                     *
  * 这在使用 sails-disk 进行开发时特别有用。                                 *
  *                                                                          *
  * 根据您使用的数据库，您可能想要在生产环境中禁用此 polyfill。              *
  *                                                                          *
  * (关于生产配置，请参见 `config/env/production.js`。)                      *
  *                                                                          *
  ***************************************************************************/

  cascadeOnDestroy: true


};
