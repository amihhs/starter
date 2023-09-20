import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@amihhs/monorepo-template-test': r('./packages/test/src/'),
}
