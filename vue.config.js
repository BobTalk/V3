const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.resolve.alias
            .set('@style', resolve('src/assets/css'))
    },
    configureWebpack: () => {
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 9090,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://192.168.37.24',//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        }, // 设置代理
        before: app => {
        }
    },
    // 第三方插件配置
    pluginOptions: {}
}