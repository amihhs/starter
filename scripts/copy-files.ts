import { copyFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

const directories = readdirSync(resolve(_dirname, '../templates')).filter((file) => {
  return statSync(resolve(_dirname, '../templates', file)).isDirectory()
})

directories.forEach((v) => {
  const needCopyFiles = [
    ['LICENSE', `templates/${v}/LICENSE`],
    ['.eslintrc', `templates/${v}/.eslintrc`],
  ]
  for (const [source, file] of needCopyFiles)
    copyFileSync(resolve(_dirname, '..', source), resolve(_dirname, '..', file))
})
