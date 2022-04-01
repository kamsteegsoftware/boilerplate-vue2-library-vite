import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import * as path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve( __dirname, 'src/index.ts'),
            name: 'vite-vue2-library',
            fileName: ( format ) => `vite-vue2-library.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [createVuePlugin()]
})
