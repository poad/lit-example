import { replacePlugin } from 'rolldown/plugins';

export default {
  input: 'dist/my-element.js',
  output: {
    file: 'dist/my-element.bundled.js',
    format: 'esm',
  },
  onwarn(warning: Record<string, unknown>) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replacePlugin(
      {},
      {
        preventAssignment: false,
      },
    ),
  ],
};
