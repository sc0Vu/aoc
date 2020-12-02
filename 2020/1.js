const fs = require('fs')
const path = require('path')
const filePath = path.join('.', '1.input')

fs.readFile(filePath, 'utf8', (err, inputs) => {
  if (err) {
    console.error(`Couldn't read the input ${filePath}: ${err.message}`)
    return
  }
  const targ = 2020
  const sep = '\n'
  const d = inputs.split(sep).map((i) => parseInt(i)).filter((i) => i < targ)
  if (d.length < 0) {
    console.error(`Empty input ${inputs}`)
    return
  }
  const total = d.length
  let res = 0
  for (let i=0; i<total; i++) {
    const diff = targ - d[i]
    const ind = d.indexOf(diff)
    if (ind >= 0) {
      res = d[i] * d[ind]
      break
    }
  }
  console.log(res)
})