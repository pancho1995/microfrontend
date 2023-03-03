const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
    output: {
        publicPath: "http://localhost:3000/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "mainApp",
            filename: "remoteEntry.js",
            remotes: {
                remote: 'remote@http://localhost:3001/remoteEntry.js'
            },
            exposes: {},
            shared: {
                "react": {
                    singleton: true,
                    requiredVersion: deps.react,
                  },
                  "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                  },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};