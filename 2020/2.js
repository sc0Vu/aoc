const fs = require('fs')
const path = require('path')
const filePath = path.join('.', '2.input')

fs.readFile(filePath, 'utf8', (err, inputs) => {
  if (err) {
    console.error(`Couldn't read the input ${filePath}: ${err.message}`)
    return
  }
  const sep = '\n'
  const validRows = inputs.split(sep).filter((i) => {
    let d = i.split(' ')
    d[0] = d[0].split('-').map((bound) => parseInt(bound))
    d[1] = d[1].substr(0, 1)
    let spPass = d[2].split('').filter((s) => s === d[1])
    const lower = d[0][0]
    const upper = d[0][1]
    return spPass.length >= lower && spPass.length <= upper
  })
  console.log(validRows.length)
})