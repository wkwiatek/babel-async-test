const fs = require('fs')
const babel = require('babel-core')
const customPlugin = require('./plugin')

const fileName = process.argv[2]

fs.readFile(fileName, (err, data) => {
  if (err) throw err

  const src = data.toString()

  const out = babel.transform(src, {
    plugins: [customPlugin],
    presets: ['stage-0']
  })

  console.log(out.code)
})