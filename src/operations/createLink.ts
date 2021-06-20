import { existsSync, mkdirSync, readdirSync, symlinkSync, rmdirSync } from 'fs'
import { TXT_BRIGHT, TXT_RED, TXT_RESET } from '../utils/textConstants'
import { getLinkDir } from '../utils/getLinkDir'
import { EC_PACKAGE_NOT_FOUND, EC_SUCCESS } from '../utils/exitCodes'

export const createLink = (): number => {
  const currentDir = process.cwd()
  const packagePath = `${currentDir}/package.json`

  if (!existsSync(packagePath)) {
    console.error(
      `${TXT_RED}package.json can't be found in ${currentDir}${TXT_RESET}`
    )
    return EC_PACKAGE_NOT_FOUND
  }

  const packageJson = require(packagePath)
  const projectName = packageJson.name
  const linkDir = getLinkDir(projectName)

  if (existsSync(linkDir)) {
    rmdirSync(linkDir, {
      recursive: true,
    })
  }

  mkdirSync(linkDir, {
    recursive: true,
  })

  readdirSync(currentDir)
    .filter((f) => f.toLowerCase() !== 'node_modules')
    .forEach((f) => symlinkSync(`${currentDir}/${f}`, `${linkDir}/${f}`))

  console.log(`The symlinks for ${projectName} were created in ${linkDir}.`)
  console.log(
    `Run ${TXT_BRIGHT}dist-link ${projectName}${TXT_RESET} in your project's folder for linking.`
  )

  return EC_SUCCESS
}
