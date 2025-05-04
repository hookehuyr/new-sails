/*
 * @Date: 2025-05-03 22:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 19:57:13
 * @FilePath: /new-sails/config/bootstrap.js
 * @Description: 文件描述
 */
/**
 * 种子函数
 * (sails.config.bootstrap)
 *
 * 在Sails应用启动之前运行的函数。
 * > 需要更多灵活性？你也可以创建一个钩子（hook）。
 *
 * 关于使用虚拟数据初始化应用的更多信息，请查看：
 * https://sailsjs.com/config/bootstrap
 */

const sails = require('sails');

module.exports.bootstrap = async function() {

  // 按照惯例，这里是在开发期间设置虚拟数据的好地方。
  //
  // 例如：
  // ```
  // // 设置开发用的虚拟数据（如果已经有数据则跳过）
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // 等等
  // ]);
  // ```

    // 检查数据库连接
    // try {
    //   await sails.getDatastore().sendNativeQuery('SELECT 1');
    //   sails.log.info('数据库连接成功');
    // } catch (error) {
    //   sails.log.error('数据库连接失败:', error);
    // }

    // // 加载环境变量
    // process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    // // 设置默认时区
    // process.env.TZ = 'Asia/Shanghai';

    // // 调用回调函数，表示启动过程完成
    // return done();

};
