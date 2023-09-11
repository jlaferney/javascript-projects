import buble from 'rollup-plugin-buble'

export default {
    entry: 'src/bin/jscode.js',
    dest: 'bin/jscode',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
    external: ['opts', 'pjson'],
    paths: {
        pjson: '../package.json'
    },
    plugins: [
        buble()
    ]
}