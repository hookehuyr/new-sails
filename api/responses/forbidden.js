/*
 * @Date: 2025-05-04 12:54:54
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2025-05-04 13:22:53
 * @FilePath: /new-sails/api/responses/forbidden.js
 * @Description: 文件描述
 */
/**
 * forbidden.js
 *
 * 403 (Forbidden) 处理程序
 *
 * 用于处理用户请求被禁止访问的情况
 * 更多信息请参考：
 * • https://sailsjs.com/docs/reference/response-res/res-forbidden
 *
 */

module.exports = function forbidden(data) {
    var req = this.req;
    var res = this.res;
    var sails = req._sails;

    // 设置状态码为403
    res.status(403);

    /**
     * 根据请求类型提供不同的响应：
     * • 如果请求期望返回JSON格式，返回JSON响应
     * • 如果请求期望返回HTML格式，返回HTML响应
     * 实现了生产环境的安全处理
     * • 在生产环境中，不暴露错误详情
     * • 在开发环境中，暴露错误详情
     */
    // 如果请求期望返回JSON格式
    if (req.wantsJSON) {
        // 在生产环境中不暴露错误详情
        if (process.env.NODE_ENV === "production") {
            data = undefined;
        }
        return res.json(data || { error: "Forbidden" });
    }

    /**
     * 支持自定义错误消息：
     * • 可以通过传入data参数来自定义错误信息
     * • 默认错误消息为"您没有权限访问此页面"
     * return res.view(pathToView, locals); 前面是模板，后面是传的变量，命名什么就在模板直接引用
     */
    // 如果是普通请求，渲染403.ejs视图
    return res.view("403", {
        error: data && data.message ? data.message : "您没有权限访问此页面",
    });
};
