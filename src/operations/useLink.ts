import { existsSync, rmSync, symlinkSync } from 'fs'
import { getLinkDir } from '../utils/getLinkDir'
import {
  TXT_BRIGHT,
  TXT_GREEN,
  TXT_RED,
  TXT_RESET,
} from '../utils/textConstants'
import { EC_LINK_NOT_FOUND, EC_SUCCESS } from '../utils/exitCodes'

export const useLink = (projectName: string): number => {
  const linkDir = getLinkDir(projectName)
  if (!existsSync(linkDir)) {
    console.error(
      `${TXT_RED}The link for ${projectName} can't be found in ${linkDir}${TXT_RESET}.`
    )
    console.error(
      `Probably, ${TXT_BRIGHT}dist-link${TXT_RESET} should be run in the source folder of ${TXT_BRIGHT}${projectName}${TXT_RESET} first.`
    )
    return EC_LINK_NOT_FOUND
  }

  const targetDir = `${process.cwd()}/node_modules/${projectName}`
  if (existsSync(targetDir)) {
    rmSync(targetDir, {
      recursive: true,
    })
  }

  symlinkSync(linkDir, targetDir)

  console.log(
    `${TXT_GREEN}${TXT_BRIGHT}${projectName}${TXT_RESET}${TXT_GREEN} has been successfully linked.${TXT_RESET}`
  )

  return EC_SUCCESS
}
