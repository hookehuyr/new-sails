/*
 * @Date: 2025-05-04 18:16:23
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 18:18:28
 * @FilePath: /new-sails/api/models/User.js
 * @Description: 文件描述
 */
/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: 'string',
    },

    address: {
      type: 'string',
    },

  }

};
