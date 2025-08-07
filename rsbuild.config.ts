import { pluginReact } from '@rsbuild/plugin-react'
import { pluginYaml } from '@rsbuild/plugin-yaml'
import { pluginSass } from '@rsbuild/plugin-sass'
import { defineConfig } from '@rsbuild/core'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [pluginReact(), pluginYaml(), pluginSass()],
  html: {
    title: '筷签 ( chop sign )',
    meta: {
      description: 'A web application for signing in and out of the company'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      $: resolve(__dirname, 'src/pages'),
      '#': resolve(__dirname, 'src/constants')
    }
  }
})
