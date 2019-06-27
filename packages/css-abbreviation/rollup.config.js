import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts',
    external: [
        '@emmetio/scanner',
        '@emmetio/scanner/utils'
    ],
    plugins: [typescript({
        tsconfigOverride: {
            compilerOptions: { module: 'esnext' }
        }
    })],
    output: [
        { format: 'cjs', file: 'dist/css-abbreviation.cjs.js' },
        { format: 'es',  file: 'dist/css-abbreviation.es.js' }
    ]
};
