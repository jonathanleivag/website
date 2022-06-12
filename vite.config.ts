import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    eslintPlugin(),
    StylelintPlugin({
      allowEmptyInput: true
    })
  ]
})
