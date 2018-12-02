'use strict'

const electron = require('electron')
const clipboard = electron.clipboard
const remote = electron.remote
const markDown = remote.require('./lib/markDown')

document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('replace')
  button.addEventListener('click', function () {
    let markdownText = document.getElementById('text').value
    if (markdownText) {
      let html = markDown.toLigBlog(markdownText)
      clipboard.writeText(html)
    }
  })
})
