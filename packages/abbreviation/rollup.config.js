import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts',
    plugins: [typescript({
        tsconfigOverride: {
            compilerOptions: { module: 'esnext' }
        }
    })],
    external: [
        '@emmetio/scanner',
        '@emmetio/scanner/utils'
    ],
    output: [{
        format: 'cjs',
        sourcemap: true,
        file: './dist/abbreviation.cjs.js'
    }, {
        format: 'es',
        sourcemap: true,
        file: './dist/abbreviation.es.js'
    }]
};
