import path from 'path'
import { v4 as uuid } from 'uuid'
import fs from 'fs'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
if (!fs.existsSync(path.join(__dirname, '..', 'codes'))) {
  fs.mkdirSync(path.join(__dirname, '..', 'codes'))
}

const createFile = (language, code, funcName = '', todo = 'judge') => {
  const fileId = uuid()
  const fileName = `${fileId}.${language}`
  if (todo === 'judge') {
    fs.writeFileSync(
      path.join(__dirname, '..', 'codes', `${fileName}`),
      code?.toString() +
        `
    export default ${funcName}
    `
    )
  } else if (todo === 'compile') {
    fs.writeFileSync(
      path.join(__dirname, '..', 'codes', `${fileName}`),
      code?.toString()
    )
  }
  return fileName
}

export default createFile
