const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const webpackDevServer =require('webpack-dev-server');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//webpack 配置信息
module.exports = {
    entry: "./src/index.ts", 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js',   //打包后的文件名
        environment:{
            arrowFunction: false,  //禁用es6箭头函数
        }
    },
    mode: 'development',  //开发模式
    resolve: {
        // alias:{
        //  "@": path.resolve(__dirname, "src"),
        // },
        extensions: ['.ts', '.js'],  //指定文件后缀名,指定哪些文件作为模块被打包
    },
    //webpack 打包时要使用的模块
    module: {
        //指定加载规则
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use:[
                    {
                      loader: "babel-loader",  //指定加载器
                      options: {
                        //设置预定义的环境
                        presets:[
                            [
                            '@babel/preset-env',
                            //配置信息
                            { 
                                //指定浏览器要兼容的版本
                                "targets": {   
                                    "chrome": "88",
                                    "ie":11, 
                                },
                                 //指定corejs版本,语法补丁
                                 "corejs":3,
                                 //usage-表示按需加载
                                 "useBuiltIns": "usage",
                            }
                            ]
                        ],
                      }
                    },
                    "ts-loader"
                ]
            }
        ]
    },
    plugins:[
       new htmlWebpackPlugin(),
       new CleanWebpackPlugin()
    ]
}