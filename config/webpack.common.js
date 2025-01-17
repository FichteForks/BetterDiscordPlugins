const BdWrapperPlugin = require('./utils/BdWrapperPlugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    target: 'node',
    entry: {
        WhoReacted: './src/WhoReacted',
        BiggerStreamPreview: './src/BiggerStreamPreview'
    },
    output: {
        library: {
            type: 'commonjs2',
            export: 'default'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: '@svgr/webpack'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new BdWrapperPlugin({
            entryName: 'WhoReacted',
            manifest: require('../src/WhoReacted/manifest.json'),
            importPath: './src/WhoReacted'
        }),
        new BdWrapperPlugin({
            entryName: 'BiggerStreamPreview',
            manifest: require('../src/BiggerStreamPreview/manifest.json'),
            importPath: './src/BiggerStreamPreview'
        })
    ],
    externals: {
        react: ['global BdApi', 'React'],
        zlibrary: 'global ZeresPluginLibrary',
        electron: 'commonjs2 electron',
        request: 'commonjs2 request',
        '@bandagedbd/bdapi': 'assign {BdApi: global.BdApi}'
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    }
};
