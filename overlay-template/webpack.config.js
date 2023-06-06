/*     
    The output from these steps are:
        A minified, (polyfilled) production bundle for your javascript
        Minified HTML pages 
        Minified CSS
        The rest of your static assets
*/

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");



/***** Steps to copy and minify existing HTML files using html-webpack-plugin *****/
let indexConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname + "/index.html"),
    file: 'index.html',
    inject: 'head',
    scriptLoading: 'defer',
    hash: true,
    minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
    }
})
/***** END bundling HTML *****/



/***** JS/CSS Bundle + Static Assets creation *****/
module.exports = {
    devServer: {
        client: {
          overlay: {
                errors: true,
                warnings: false
            }
        }
    },
    entry: path.resolve(__dirname + "/js/index.js"),
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            // load styles
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ]
            },
            // load imgs
            {
                // cover all test cases (do you have .jpg or otherwise? add to test case)
                test: /\.(png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            })
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        // CopyWebpackPlugin moves assets into the build folder
        // we use it here for the img & css folders b/c this set up assumes you aren't using 'require' or 'import' to load either asset
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './img',
                    to: 'img',
                    toType: 'dir'
                },
                {
                    from: './css',
                    to: 'css',
                    toType: 'dir'
                }
            ]
        }),
        indexConfig
    ]
}
/***** END bundle *****/