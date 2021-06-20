import { tmpdir } from 'os'

export const getLinkDir = (projectName: string): string =>
  `${tmpdir()}/dist-link/${projectName}`
