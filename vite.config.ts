import { defineConfig } from 'vite'
import {resolve} from 'path'
import {dependencies,devDependencies} from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      formats:['es'],
      // the proper extensions will be added
      fileName: 'live-bundlers',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      'react/jsx-runtime',]
    },
    target:'esnext',
    sourcemap:true
  }})