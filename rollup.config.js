import json from "@rollup/plugin-json";
import cjs from '@rollup/plugin-commonjs';
import node from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from "rollup-plugin-copy-assets";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/main.js',
  output: [
    { file: './public/js/bundle.js', format: 'iife', sourcemap: false }
  ],
  plugins: [
    node(),
    cjs(),
    json({
      compact: true,
    }),
    production && terser()
  ],
  onwarn: function (warning, superOnWarn) {
    /*
     * skip certain warnings
     * https://github.com/openlayers/openlayers/issues/10245
     */
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    superOnWarn(warning);
  }
};
