import { Plugin } from 'vite'
import path from 'path'
import * as acorn from 'acorn'

const defaultOptions = {
  ecmaVersion: 'latest'
}

export type ESCheckOptions = acorn.Options

export default function ESCheckPlugin(options?: ESCheckOptions): Plugin {
  let config
  return {
    name: 'vite-plugin-escheck',
    apply: 'build',
    enforce: 'post',
    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      config = { ...defaultOptions, ...(options || {}) }
    },
    generateBundle(options, bundle, isWrite) {
      for (const item of Object.values(bundle)) {
        const extname = path.extname(item.fileName)
        if (extname === '.js') {
          const code = (item as any).code
          try {
            acorn.parse(code, {
              ecmaVersion: config.ecmaVersion,
            })
          } catch (err: any) {
            const { line, column } = err.loc
            const arr = code.split(/\r?\n/)
            const errLine = arr[line - 1]
            throw new Error( err.message +'\n' + 'filename: ' + item.fileName + '\n' + JSON.stringify(err.loc) + '\n' + errLine.slice(column, column + 20))
          }
        }
      }
    }
  }
}