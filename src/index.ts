#!/usr/bin/env node

import { createLink } from './operations/createLink'
import { useLink } from './operations/useLink'

async function main() {
  if (typeof process.argv[2] === 'undefined') {
    process.exitCode = await createLink()
  } else {
    process.exitCode = await useLink(process.argv[2])
  }
}

main().then()
