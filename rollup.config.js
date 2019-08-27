import resolve from "rollup-plugin-node-resolve";
import cjs from "rollup-plugin-commonjs";

module.exports = {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        cjs()
    ]
};